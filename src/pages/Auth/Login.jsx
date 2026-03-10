import FormLogin from "../../components/Layouts/Auth/FormLayouts/FormLogin";
import AuthLayout from "../../components/Layouts/Auth/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Selamat Datang!" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
