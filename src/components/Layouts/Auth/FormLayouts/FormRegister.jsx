import { useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { register } from "../../../../service/auth.service";
import InputForm from "../../../Fragments/InputForm/Index";
import Button from "../../../Elements/Button/Index";
import Select from "../../../Elements/Select/Index";
import { registerSchema } from "../../../../schemas/registerSchema";

const FormRegister = () => {
  const navigate = useNavigate();

  // ✅ 2. Setup React Hook Form + Zod Resolver
  const {
    register: registerField, // rename agar tidak bentrok dengan fungsi register dari service
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      jenis_kelamin: "",
      no_hp: "",
      instansi: "",
      password: "",
      password_confirmation: "",
    },
  });

  const genderOptions = [
    { value: "Laki-laki", label: "Laki-laki" },
    { value: "Perempuan", label: "Perempuan" },
  ];

  // ✅ 3. Handle Submit — validasi sudah otomatis oleh Zod
  const onSubmit = async (data) => {
    const result = await register(data);

    if (result.success) {
      navigate("/verify-otp", {
        state: { email: result.email, fromRegister: true },
      });
    } else {
      // ✅ Map error dari API ke field masing-masing
      if (result.errors) {
        Object.entries(result.errors).forEach(([field, messages]) => {
          setError(field, {
            type: "server",
            message: Array.isArray(messages) ? messages[0] : messages,
          });
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* ✅ General error dari server */}
      {errors.general && (
        <p className="text-red-500 text-xs mb-3">{errors.general.message}</p>
      )}

      {/* ✅ Setiap field pakai ...registerField() */}
      <InputForm
        label="Nama"
        type="text"
        placeholder="Masukkan nama"
        error={errors.name?.message}
        {...registerField("name")}
      />

      <InputForm
        label="Email"
        type="email"
        placeholder="Masukkan email"
        error={errors.email?.message}
        {...registerField("email")}
      />

      {/* ✅ Select perlu pakai registerField juga */}
      <Select
        label="Jenis Kelamin"
        options={genderOptions}
        error={errors.jenis_kelamin?.message}
        {...registerField("jenis_kelamin")}
      />

      <InputForm
        label="Nomor WhatsApp"
        type="text"
        placeholder="Masukkan nomor WhatsApp"
        error={errors.no_hp?.message}
        {...registerField("no_hp")}
      />

      <InputForm
        label="Sekolah/Perguruan Tinggi/Instansi"
        type="text"
        placeholder="Masukkan sekolah/perguruan tinggi/instansi"
        error={errors.instansi?.message}
        {...registerField("instansi")}
      />

      <InputForm
        label="Password"
        type="password"
        placeholder="Masukkan password"
        error={errors.password?.message}
        {...registerField("password")}
      />

      <InputForm
        label="Konfirmasi Password"
        type="password"
        placeholder="Masukkan konfirmasi password"
        error={errors.password_confirmation?.message}
        {...registerField("password_confirmation")}
      />

      <Button
        type="submit"
        classname="bg-primary font-medium tracking-widest text-xs mt-5 w-full hover:bg-primary-hover flex justify-center items-center"
        disabled={isSubmitting}
      >
        {isSubmitting ? "MEMPROSES..." : "DAFTAR"}{" "}
        <ColorRing
          height="20"
          width="20"
          colors={["ffffff", "ffffff", "ffffff", "ffffff", "ffffff"]}
          visible={isSubmitting}
        />
      </Button>
    </form>
  );
};

export default FormRegister;
