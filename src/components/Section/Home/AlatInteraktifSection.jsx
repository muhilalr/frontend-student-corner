import {
  Calculator,
  ChartNoAxesColumnIncreasing,
  ChartPie,
} from "lucide-react";
import { Link } from "react-router-dom";

const AlatInteraktifSection = () => {
  return (
    <section className="pt-8 md:pt-16 w-full max-w-6xl mx-auto mb-10 lg:mb-0 px-4 md:px-10">
      <h2 className="mb-2 text-center text-2xl md:text-4xl font-bold text-gray-800">
        Alat Bantu Interaktif
      </h2>
      <p class="font-semibold text-center text-base text-gray-500 mb-8 md:mb-12">
        Temukan berbagai alat bantu yang dirancang untuk mempermudah analisis
        dan pemahaman data Anda secara interaktif.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/kalkulator-statistik">
          <div className="rounded-lg bg-white p-4 md:p-6 shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mb-4 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-yellow-400">
              <Calculator color="#ffffff" strokeWidth={2.5} />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              Kalkulator Statistik
            </h3>
            <p className="text-justify text-sm font-semibold text-gray-500">
              Selesaikan berbagai operasi statistik, dari rata-rata hingga
              regresi. Dapatkan hasil instan untuk setiap perhitungan data Anda.
            </p>
          </div>
        </Link>
        <Link to="/visualisasi-data">
          <div className="rounded-lg bg-white p-4 md:p-6 shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mb-4 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-green-400">
              <ChartPie color="#ffffff" strokeWidth={2.5} />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              Visualisasi Data
            </h3>
            <p className="text-justify text-sm font-semibold text-gray-500">
              Konversikan data mentah menjadi grafik dan diagram yang interaktif
              untuk analisis yang lebih mudah.
            </p>
          </div>
        </Link>
        <Link to="/visualisasi-data">
          <div className="rounded-lg bg-white p-4 md:p-6 shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mb-4 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-purple-400">
              <ChartNoAxesColumnIncreasing color="#ffffff" strokeWidth={2.5} />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              Simulasi Statistik
            </h3>
            <p className="text-justify text-sm font-semibold text-gray-500">
              Buat dan jalankan simulasi statistik untuk memprediksi hasil dan
              memahami dinamika data dalam berbagai skenario.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default AlatInteraktifSection;
