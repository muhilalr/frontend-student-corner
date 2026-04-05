import Card from "../../Fragments/Card/Index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const edukasiItems = [
  {
    id: 1,
    tag: "Statistik",
    title: "Dasar-Dasar Statistik",
    description:
      "Pelajari konsep statistik dasar dengan penjelasan yang ringan, terstruktur, dan mudah dipahami.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    href: "#",
  },
  {
    id: 2,
    tag: "Visualisasi",
    title: "Visualisasi Data",
    description:
      "Kenali cara membaca grafik dan memilih visual yang tepat agar insight data lebih cepat terlihat.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=900&q=80",
    href: "#",
  },
  {
    id: 3,
    tag: "Probabilitas",
    title: "Probabilitas untuk Pemula",
    description:
      "Mulai dari peluang sederhana sampai penerapannya dalam kehidupan sehari-hari dan analisis data.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    href: "#",
  },
  {
    id: 4,
    tag: "Terapan",
    title: "Statistik di Dunia Nyata",
    description:
      "Lihat bagaimana statistik dipakai dalam pendidikan, bisnis, riset, dan pengambilan keputusan.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    href: "#",
  },
];

const KontenEdukasiSection = () => {
  return (
    <section
      className="w-full py-12 md:py-16 overflow-hidden bg-[#16213e]"
      // style={{
      //   background:
      //     "linear-gradient(135deg, #0f3460 0%, #16213e 50%, #0a1628 100%)",
      // }}
    >
      {/* Header */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
          Konten Edukasi
        </h2>
        <p className="text-sm text-white/50 mx-auto max-w-xl md:text-base font-semibold">
          Eksplor dan pelajari lebih banyak berdasarkan topik yang kamu inginkan
        </p>
      </div>

      {/* Swiper Container */}
      <div className="relative max-w-6xl mx-auto px-10 sm:px-14">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".edukasi-prev",
            nextEl: ".edukasi-next",
          }}
          pagination={{
            clickable: true,
            bulletClass: "edukasi-dot",
            bulletActiveClass: "edukasi-dot-active",
            el: ".edukasi-pagination",
          }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-2!"
        >
          {edukasiItems.map((item) => (
            <SwiperSlide key={item.id} className="h-auto py-2 px-10 md:px-0">
              <Card
                image={item.image}
                title={item.title}
                description={item.description}
                href={item.href}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Nav Buttons */}
        <button className="edukasi-prev absolute left-6 md:left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-200 active:scale-95 backdrop-blur-sm disabled:opacity-30">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button className="edukasi-next absolute right-6 md:right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-200 active:scale-95 backdrop-blur-sm disabled:opacity-30">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Custom Pagination Dots */}
      <div className="edukasi-pagination flex justify-center gap-1.5 mt-6" />

      {/* Override Swiper pagination styles */}
      <style>{`
        .edukasi-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .edukasi-dot-active {
          width: 20px;
          background: white;
        }
        .edukasi-prev.swiper-button-disabled,
        .edukasi-next.swiper-button-disabled {
          opacity: 0.3;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default KontenEdukasiSection;
