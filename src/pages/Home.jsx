import Navbar from "../components/Fragments/Navbar/Index.jsx";
import HeroSection from "../components/Section/Home/HeroSection.jsx";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default HomePage;
