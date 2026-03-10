import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import { register } from "../../../../service/auth.service";
import InputForm from "../../../Fragments/InputForm/Index";
import Button from "../../../Elements/Button/Index";
import Select from "../../../Elements/Select/Index";

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

    const result = await register(form);

    if (result.success) {
      navigate("/verify-otp", {
        state: { email: result.email, fromRegister: true },
      });
    } else {
      setErrors(result.errors);
    }

    setLoading(false);
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
