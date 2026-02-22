import { Link } from "react-router-dom";

const AuthLayout = ({ children, title, type }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md bg-white px-6 py-4 shadow-md rounded-lg my-15">
        <h1 className="text-3xl font-semibold mt-4 text-center">{title}</h1>
        <p className="text-base text-gray-600 mt-3 mb-10 text-center">
          {type === "login"
            ? "Masuk ke akun Anda untuk melanjutkan pembelajaran statistik"
            : "Daftarkan diri Anda untuk melanjutkan pembelajaran statistik"}
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-base text-center mt-3.5">
        Belum punya akun?{" "}
        <Link
          to="/register"
          className="font-semibold text-[#043277] hover:underline"
        >
          Daftar Sekarang
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-base text-center mt-3.5">
        Sudah punya akun?{" "}
        <Link
          to="/login"
          className="font-semibold text-[#043277] hover:underline"
        >
          Masuk Sekarang
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
