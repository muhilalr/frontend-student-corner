import FormRegister from "../../components/Layouts/Auth/FormLayouts/FormRegister";
import AuthLayout from "../../components/Layouts/Auth/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout title="Pendaftaran Akun" type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
