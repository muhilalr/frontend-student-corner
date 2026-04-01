import z from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, "Nama wajib diisi")
      .min(3, "Nama minimal 3 karakter"),

    email: z
      .string()
      .min(1, "Email wajib diisi")
      .email("Format email tidak valid"),

    jenis_kelamin: z
      .string()
      .refine((value) => ["Laki-laki", "Perempuan"].includes(value), {
        message: "Jenis kelamin wajib dipilih",
      }),

    no_hp: z
      .string()
      .min(1, "Nomor WhatsApp wajib diisi")
      .regex(
        /^(\+62|62|0)8[1-9][0-9]{6,10}$/,
        "Format nomor WhatsApp tidak valid",
      ),

    instansi: z.string().min(1, "Instansi wajib diisi"),

    password: z
      .string()
      .min(1, "Password wajib diisi")
      .min(8, "Password minimal 8 karakter"),

    password_confirmation: z.string().min(1, "Konfirmasi password wajib diisi"),
  })
  // ✅ Validasi silang password
  .refine((data) => data.password === data.password_confirmation, {
    message: "Konfirmasi password tidak cocok",
    path: ["password_confirmation"],
  });
