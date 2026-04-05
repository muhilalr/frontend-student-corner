import { Calculator, Link } from "lucide-react";
import Ilustrasi from "../../../assets/Yes or no-amico.svg";

const KuisSection = () => {
  return (
    <section className="flex mb-10 lg:min-h-screen items-center justify-center">
      <div className="flex w-full max-w-6xl flex-col overflow-hidden rounded-xl bg-white shadow-lg md:flex-row">
        {/* <!-- Left side - Illustration --> */}
        <div className="relative flex w-full items-center justify-center bg-utama p-6 md:w-1/2">
          <img src={Ilustrasi} alt="" className="w-80 lg:w-96" />
        </div>

        {/* <!-- Right side - Content --> */}
        <div className="flex w-full flex-col items-center justify-center gap-5 p-8 md:w-1/2">
          <div className="flex flex-col items-center justify-center mb-4">
            <h1 className="mb-4 text-2xl md:text-3xl font-bold text-gray-800">
              Kuis dan Tantangan Untuk Kamu!
            </h1>
            <p className="text-center text-sm md:text-base font-semibold text-gray-600">
              Jelajahi konsep-konsep baru dan pertajam pemahamanmu dengan kuis
              dan tantangan yang dirancang untuk menyenangkan sekaligus
              mendidik. Temukan seberapa jauh kamu bisa melangkah!
            </p>
          </div>
          {/* <!-- Buttons --> */}
          <div className="w-full flex items-center justify-center">
            <a href="{{ route('kuis-tantangan.index') }}">
              <button className="rounded-md border border-orange-500 px-6 py-3 lg:px-4 lg:py-2 text-sm font-medium text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white">
                Lihat Selengkapnya
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KuisSection;
