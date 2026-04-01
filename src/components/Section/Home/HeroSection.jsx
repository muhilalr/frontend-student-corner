import assetHero from "../../../assets/Analysis-cuate.svg";
const HeroSection = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container mx-auto py-32 lg:py-12 px-4 sm:pr-6 sm:pl-16">
          <div className="flex flex-col items-center md:flex-row">
            {/* Left Content */}
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="mb-10 w-full text-center md:text-left md:mb-0 md:w-1/2"
            >
              <h1 className="mb-4 text-4xl lg:text-5xl font-bold text-utama">
                Tempat Asyik Untuk
                <br />
                Literasi Statistik
              </h1>
              <p className="mb-8 text-base lg:text-lg text-gray-600">
                Mari jelajahi dunia statistik dengan cara yang lebih seru dan
                menyenangkan
              </p>
            </div>

            {/* Right Content and Illustration */}
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              className="relative w-full md:w-1/2"
            >
              {/* Orange Circles */}
              <div className="absolute -top-6 -right-6 h-40 w-40 sm:h-64 sm:w-64 rounded-full bg-orange-100 opacity-50"></div>

              {/* Small Orange Circles */}
              <div className="absolute top-12 left-12 h-4 w-4 rounded-full bg-orange-200 hidden sm:block"></div>
              <div className="absolute bottom-24 left-6 h-6 w-6 rounded-full bg-orange-200 hidden sm:block"></div>
              <div className="absolute top-32 right-12 h-3 w-3 rounded-full bg-orange-200 hidden sm:block"></div>

              {/* Yellow Dot */}
              <div className="absolute top-6 right-6 h-8 w-8 items-center justify-center rounded-full bg-yellow-200 hidden sm:flex">
                <div className="h-6 w-6 rounded-full bg-yellow-300"></div>
              </div>

              {/* Illustration */}
              <div className="relative z-10 flex justify-center">
                <img
                  src={assetHero}
                  alt="Ilustrasi"
                  className="w-96 lg:w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
