import Button from "../../../Elements/Button/Index";
import InputForm from "../../../Fragments/InputForm/Index";

const FormLogin = () => {
  return (
    <form>
      <InputForm
        label="Email"
        name="email"
        type="text"
        placeholder="Masukkan email"
      />

      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="Masukkan password"
      />

      <Button
        classname="bg-utama font-medium tracking-widest text-xs mt-5 w-full"
        type="submit"
      >
        MASUK
      </Button>
    </form>
  );
};

export default FormLogin;
