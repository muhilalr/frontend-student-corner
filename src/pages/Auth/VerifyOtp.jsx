import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { resendOtp, verifyOtp } from "../../service/auth.service";
import Button from "../../components/Elements/Button/Index";
import { toast } from "react-toastify";

const VerifyOtpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state, key: locationKey } = location; // Ambil locationKey untuk deteksi refresh!

  // 1. Simpan email agar tahan banting saat di-refresh
  const [email] = useState(() => {
    const savedEmail = localStorage.getItem("otp_email");
    if (state?.email) {
      localStorage.setItem("otp_email", state.email);
      return state.email;
    }
    return savedEmail || "";
  });

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // 2. Logika Cooldown ANTI REFRESH NGULANG
  const [cooldown, setCooldown] = useState(() => {
    const savedExpiry = localStorage.getItem("otp_expiry");
    const savedNavKey = sessionStorage.getItem("otp_nav_key");
    const now = Date.now();

    // CEK 1: Apakah ini navigasi BARU dari halaman register?
    // Jika locationKey BERBEDA dengan yang disimpan, berarti INI BUKAN REFRESH
    if (state?.fromRegister && savedNavKey !== locationKey) {
      sessionStorage.setItem("otp_nav_key", locationKey); // Tandai sesi ini
      const newExpiry = now + 60000;
      localStorage.setItem("otp_expiry", newExpiry.toString());
      return 60;
    }

    // CEK 2: Jika locationKey SAMA, berarti ini hasil REFRESH. Hitung sisa waktu!
    if (savedExpiry) {
      const remaining = Math.floor((parseInt(savedExpiry) - now) / 1000);
      return remaining > 0 ? remaining : 0;
    }

    return 0;
  });

  const inputRefs = useRef([]);

  // Redirect jika tidak ada email (akses langsung tanpa register)
  useEffect(() => {
    if (!email) {
      navigate("/register");
    }
  }, [email, navigate]);

  // Countdown timer resend
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  // Handle input per kotak OTP
  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setError(null);

    // Auto focus ke kotak berikutnya
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace → focus ke kotak sebelumnya
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste → isi semua kotak sekaligus
  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (!pasted) return;

    const newOtp = [...otp];
    pasted.split("").forEach((char, i) => {
      newOtp[i] = char;
    });
    setOtp(newOtp);

    const lastIndex = Math.min(pasted.length - 1, 5);
    inputRefs.current[lastIndex]?.focus();
  };

  const otpCode = otp.join("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otpCode.length !== 6) return;

    setLoading(true);
    setError(null);

    const result = await verifyOtp(email, otpCode);

    if (result.success) {
      // BERSENANG-SENANG LAH: Hapus semua jejak saat verifikasi berhasil!
      localStorage.removeItem("otp_expiry");
      localStorage.removeItem("otp_email");
      sessionStorage.removeItem("otp_nav_key");
      navigate("/dashboard");
    } else {
      setError(result.message);
      // Reset kotak OTP jika salah
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    }
    setLoading(false);
  };

  const handleResend = async () => {
    setError(null);

    const result = await resendOtp(email);

    if (result.success) {
      toast.success(result.data.message);
      const newExpiry = Date.now() + 60000;
      localStorage.setItem("otp_expiry", newExpiry.toString());
      setCooldown(60);
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 shadow-md rounded-lg"
      >
        <h1 className="text-2xl text-center font-bold mb-4">
          Verifikasi Email
        </h1>
        {/* Info email tujuan */}
        <p className="text-sm text-gray-500 text-center mb-6">
          Kode OTP telah dikirim ke{" "}
          <span className="font-semibold text-primary">{email}</span>
          <br />
          Berlaku selama 5 menit.
        </p>

        {/* 6 Kotak OTP */}
        <div className="flex justify-center gap-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className={`w-11 h-12 text-center text-xl font-bold border-2 rounded-lg outline-none transition-all
              ${digit ? "border-primary bg-blue-50" : "border-gray-300"}
              ${error ? "border-red-400 bg-red-50" : ""}
              focus:border-primary focus:ring-2 focus:ring-blue-100`}
              autoFocus={index === 0}
            />
          ))}
        </div>

        {/* Tombol Verifikasi */}
        <Button
          type="submit"
          classname="bg-primary font-medium tracking-widest text-xs w-full hover:bg-primary-hover"
          disabled={loading || otpCode.length !== 6}
        >
          {loading ? "MEMVERIFIKASI..." : "VERIFIKASI"}
        </Button>

        {/* Resend OTP */}
        <div className="text-center mt-4">
          <span className="text-sm text-gray-500">Tidak menerima kode? </span>
          {cooldown > 0 ? (
            <span className="text-xs text-gray-400">
              Kirim ulang dalam{" "}
              <span className="font-semibold text-primary">{cooldown}s</span>
            </span>
          ) : (
            <span
              onClick={handleResend}
              className="text-sm text-primary font-semibold hover:underline hover:cursor-pointer"
            >
              Kirim Ulang OTP
            </span>
          )}
        </div>

        {/* Kembali ke register */}
        <div className="text-center mt-3">
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="text-xs text-gray-400 hover:text-gray-600"
          >
            ← Kembali ke halaman daftar
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerifyOtpPage;
