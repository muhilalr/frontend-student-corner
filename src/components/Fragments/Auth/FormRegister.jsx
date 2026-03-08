import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Elements/Button/Index";
import InputForm from "../../Elements/Input/Index";
import Select from "../../Elements/Input/Select";
import { register } from "../../../service/auth.service";
import { ColorRing } from "react-loader-spinner";

const FormRegister = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    jenis_kelamin: "",
    no_hp: "",
    instansi: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const genderOptions = [
    { value: "Laki-laki", label: "Laki-laki" },
    { value: "Perempuan", label: "Perempuan" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      // Tidak ada foto → pakai JSON biasa, tidak perlu FormData
      const response = await register(form);

      navigate("/verify-otp", {
        state: { email: response.email },
      });
    } catch (err) {
      if (err.response?.status === 422) {
        setErrors(err.response.data.errors);
      } else {
        setErrors({ general: ["Terjadi kesalahan. Silakan coba lagi."] });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors.general && (
        <p className="text-red-500 text-xs mb-3">{errors.general[0]}</p>
      )}

      <InputForm
        label="Nama"
        name="name"
        type="text"
        placeholder="Masukkan nama"
        value={form.name}
        onChange={handleChange}
        error={errors.name?.[0]}
      />
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="Masukkan email"
        value={form.email}
        onChange={handleChange}
        error={errors.email?.[0]}
      />
      <Select
        label="Jenis Kelamin"
        name="jenis_kelamin"
        options={genderOptions}
        value={form.jenis_kelamin}
        onChange={handleChange}
        error={errors.jenis_kelamin?.[0]}
      />
      <InputForm
        label="Nomor WhatsApp"
        name="no_hp"
        type="text"
        placeholder="Masukkan nomor WhatsApp"
        value={form.no_hp}
        onChange={handleChange}
        error={errors.no_hp?.[0]}
      />
      <InputForm
        label="Sekolah/Perguruan Tinggi/Instansi"
        name="instansi"
        type="text"
        placeholder="Masukkan sekolah/perguruan tinggi/instansi"
        value={form.instansi}
        onChange={handleChange}
        error={errors.instansi?.[0]}
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="Masukkan password"
        value={form.password}
        onChange={handleChange}
        error={errors.password?.[0]}
      />
      <InputForm
        label="Konfirmasi Password"
        name="password_confirmation"
        type="password"
        placeholder="Masukkan konfirmasi password"
        value={form.password_confirmation}
        onChange={handleChange}
        error={errors.password_confirmation?.[0]}
      />

      <Button
        type="submit"
        classname="bg-primary font-medium tracking-widest text-xs mt-5 w-full hover:bg-primary-hover flex justify-center items-center"
        disabled={loading}
      >
        {loading ? "MEMPROSES..." : "DAFTAR"}{" "}
        <ColorRing
          height="20"
          width="20"
          colors={["ffffff", "ffffff", "ffffff", "ffffff", "ffffff"]}
          visible={loading}
        />
      </Button>
    </form>
  );
};

export default FormRegister;
