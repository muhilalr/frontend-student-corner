import FormLogin from "../../components/Fragments/Auth/FormLogin";
import AuthLayout from "../../components/Layouts/Auth/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Selamat Datang!" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
