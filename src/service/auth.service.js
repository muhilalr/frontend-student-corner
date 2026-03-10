import api from "../lib/axios";

export const register = async (form) => {
  try {
    const res = await api.post("/auth/register", form);

    return {
      success: true,
      email: res.data.email,
    };
  } catch (err) {
    const errorData =
      err.response?.status === 422
        ? err.response.data.errors
        : { general: ["Terjadi kesalahan. Silakan coba lagi."] };

    return {
      success: false,
      errors: errorData,
    };
  }
};

export const verifyOtp = async (email, otp_code) => {
  try {
    const res = await api.post("/auth/verify-otp", { email, otp_code });

    localStorage.setItem("token", res.data.token);
    return {
      success: true,
      data: res.data,
    };
  } catch (err) {
    return {
      success: false,
      message: err.response?.data?.message || "Verifikasi gagal. Coba lagi.",
    };
  }
};

export const resendOtp = async (email) => {
  try {
    const res = await api.post("/auth/resend-otp", { email });
    return {
      success: true,
      data: res.data,
    };
  } catch (err) {
    return {
      success: false,
      message: err.response?.data?.message || "Gagal mengirim ulang OTP.",
    };
  }
};

export const login = async (email, password) => {
  const res = await api.post("/auth/login", { email, password });
  if (res.data.token) localStorage.setItem("token", res.data.token);
  return res.data;
};

// Update profil (deteksi ganti email otomatis di backend)
export const updateProfile = async (formData) => {
  const res = await api.post("/auth/update-profile", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data; // { message, email_changed, pending_email? }
};

// Verifikasi OTP untuk email baru
export const verifyEmailChange = async (otp_code) => {
  const res = await api.post("/auth/verify-email-change", { otp_code });
  return res.data;
};

// Kirim ulang OTP email baru
export const resendEmailOtp = async () => {
  const res = await api.post("/auth/resend-email-otp");
  return res.data;
};

// Batalkan perubahan email
export const cancelEmailChange = async () => {
  const res = await api.post("/auth/cancel-email-change");
  return res.data;
};
