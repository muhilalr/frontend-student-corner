import Navbar from "../components/Fragments/Navbar/Index.jsx";
import AlatInteraktifSection from "../components/Section/Home/AlatInteraktifSection.jsx";
import FooterSection from "../components/Section/Home/FooterSection.jsx";
import HeroSection from "../components/Section/Home/HeroSection.jsx";
import KontenEdukasiSection from "../components/Section/Home/KontenEdukasiSection.jsx";
import KuisSection from "../components/Section/Home/KuisSection.jsx";
import MagangSection from "../components/Section/Home/MagangSection.jsx";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <KontenEdukasiSection />
      <AlatInteraktifSection />
      <KuisSection />
      <MagangSection />
      <FooterSection />
    </>
  );
};

export default HomePage;
