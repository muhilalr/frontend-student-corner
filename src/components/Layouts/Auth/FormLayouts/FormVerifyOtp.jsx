import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../../Elements/Button/Index";
import { resendOtp, verifyOtp } from "../../../../service/auth.service";

const FormVerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);

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
    if (otpCode.length !== 6) {
      setError("Kode OTP harus terdiri dari 6 digit");
      return;
    }

    setLoading(true);
    setError(null);

    const result = await verifyOtp(email, otpCode);

    if (result.success) {
      navigate("/");
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
      setCooldown(60);
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    } else {
      toast.error(result.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Info email tujuan */}
      <p className="text-sm text-gray-500 text-center mb-6">
        Kode OTP telah dikirim ke{" "}
        <span className="font-semibold text-utama">{email}</span>
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
              ${digit ? "border-utama bg-blue-50" : "border-gray-300"}
              ${error ? "border-red-400 bg-red-50" : ""}
              focus:border-utama focus:ring-2 focus:ring-blue-100`}
            autoFocus={index === 0}
          />
        ))}
      </div>

      {error && (
        <p className="text-red-500 text-xs text-center mb-4">{error}</p>
      )}

      {/* Tombol Verifikasi */}
      <Button
        type="submit"
        classname="bg-utama font-medium tracking-widest text-xs w-full"
        disabled={loading || otpCode.length !== 6}
      >
        {loading ? "MEMVERIFIKASI..." : "VERIFIKASI"}
      </Button>

      {/* Resend OTP */}
      <div className="text-center mt-4">
        <span className="text-xs text-gray-500">Tidak menerima kode? </span>
        {cooldown > 0 ? (
          <span className="text-xs text-gray-400">
            Kirim ulang dalam{" "}
            <span className="font-semibold text-utama">{cooldown}s</span>
          </span>
        ) : (
          <button
            type="button"
            onClick={handleResend}
            className="text-xs text-utama font-semibold hover:underline"
          >
            Kirim Ulang OTP
          </button>
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
  );
};

export default FormVerifyOtp;
