import { useState } from "react";
import Button from "../../Elements/Button/Index";
import InputForm from "../../Elements/Input/Index";
import Select from "../../Elements/Input/Select";

const FormRegister = () => {
  const [gender, setGender] = useState("");

  const genderOptions = [
    { value: "Laki-laki", label: "Laki-laki" },
    { value: "Perempuan", label: "Perempuan" },
  ];
  return (
    <form>
      <InputForm
        label="Nama"
        name="name"
        type="text"
        placeholder="Masukkan nama"
      />
      <InputForm
        label="Email"
        name="email"
        type="text"
        placeholder="Masukkan email"
      />
      <Select
        label="Jenis Kelamin"
        name="jenis_kelamin"
        options={genderOptions}
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <InputForm
        label="Nomor WhatsApp"
        name="no_hp"
        type="text"
        placeholder="Masukkan nomor WhatsApp"
      />
      <InputForm
        label="Sekolah/Perguruan Tinggi/Instansi"
        name="instansi"
        type="text"
        placeholder="Masukkan sekolah/perguruan tinggi/instansi"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="Masukkan password"
      />
      <InputForm
        label="Konfirmasi Password"
        name="password_confirmation"
        type="password"
        placeholder="Masukkan konfirmasi password"
      />
      <Button
        type="submit"
        classname="bg-[#043277] font-medium tracking-widest text-xs mt-5 w-full"
      >
        DAFTAR
      </Button>
    </form>
  );
};

export default FormRegister;
