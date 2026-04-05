import Ilustrasi from "../../../assets/Analysis-pana.svg";

const MagangSection = () => {
  return (
    <section className="bg-white ">
      <div className="flex pt-10 md:pt-0 flex-col md:flex-row lg:min-h-screen items-center justify-center px-4">
        {/* <!-- Left side illustration (only visible on larger screens) --> */}
        <div className="flex items-center justify-center rounded-md w-full md:w-1/2">
          <img
            src={Ilustrasi}
            alt=""
            className="w-64 md:w-80 lg:w-96 xl:w-full max-w-lg"
          />
        </div>

        {/* <!-- Right side - Content --> */}
        <div className="flex w-full flex-col items-center md:items-start justify-center p-8 md:w-1/2">
          <div className="mb-8">
            <h1 className="mb-6 text-3xl md:text-4xl font-bold text-gray-800 text-center">
              Magang dan Riset
            </h1>
            <p className="text-center text-sm md:text-base font-semibold text-gray-600">
              Dapatkan pengalaman kerja nyata sekaligus kesempatan riset bersama
              para ahli. Melalui program ini, kamu bisa berkontribusi pada
              proyek inovatif, mengasah keterampilan profesional, serta
              berkolaborasi dalam penelitian untuk pengembangan karya ilmiah.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <a href="">
              <button className="rounded-md w-full border border-orange-500 px-6 py-3 lg:px-4 lg:py-2 text-sm font-medium text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white">
                Daftar Magang
              </button>
            </a>
            <a href="">
              <button className="rounded-md w-full border border-orange-500 px-6 py-3 lg:px-4 lg:py-2 text-sm font-medium text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white">
                Kolaborasi Riset Mandiri
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MagangSection;
