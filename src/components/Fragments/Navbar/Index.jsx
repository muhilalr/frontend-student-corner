import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Dropdown from "../Dropdown/Index";
import bps from "../../../assets/logo-bps.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
        <nav className="mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <img src={bps} alt="SC" width={50} className="relative top-0.5" />

            <p className="text-lg leading-none font-bold text-utama">
              Pojok Literasi <br />
              Statistik
            </p>
          </Link>

          <div className="hidden space-x-4 lg:space-x-5 md:flex">
            <Link
              to="/"
              className="bg-white hover:bg-gray-100 flex px-4 py-2 text-base text-slate-700 font-medium rounded-md"
            >
              Home
            </Link>

            <Dropdown label="Konten Edukasi" />
            <Dropdown
              label="Alat Interaktif"
              menu={[
                "Kalkulator Statistik",
                "Visualisasi Data",
                "Simulasi Statistik",
              ]}
            />
            <Link
              to="/"
              className="bg-white hover:bg-gray-100 flex px-4 py-2 text-base text-slate-700 font-medium rounded-md"
            >
              Kuis dan Tantangan
            </Link>
            <Dropdown
              label="Magang dan Riset"
              menu={["Program Magang", "Kolaborasi Riset Mandiri"]}
            />
          </div>

          <div className="hidden md:block">
            <Link
              to="/login"
              className="rounded-md bg-second px-4 py-2 font-medium text-white hover:bg-second-hover"
            >
              Login
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 hover:cursor-pointer md:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-expanded={isMenuOpen}
            aria-label="Open navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-slate-950/40 transition-opacity duration-300 md:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMobileMenu}
        aria-hidden={!isMenuOpen}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-[88%] max-w-sm flex-col border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={bps} alt="SC" width={50} className="relative top-0.5" />

            <p className="text-lg leading-none font-bold text-utama">
              Pojok Literasi <br />
              Statistik
            </p>
          </Link>

          <button
            type="button"
            className="rounded-xl border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 hover:cursor-pointer"
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4">
          <div className="flex flex-col gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-md px-4 py-3 font-semibold transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-50 text-utama"
                    : "text-slate-700 hover:bg-gray-100"
                }`
              }
            >
              Home
            </NavLink>

            <details
              className="collapse bg-base-100 border border-base-300 group"
              name="my-accordion-det-1"
            >
              <summary className="collapse-title text-slate-700 font-semibold after:absolute after:right-6 after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rotate-45 after:border-b-2 after:border-r-2 after:content-[''] [&::-webkit-details-marker]:hidden group-open:after:-rotate-135">
                Konten Edukasi
              </summary>
              <div className="collapse-content">
                <button className="w-full rounded-md px-4 py-2 text-left text-sm text-gray-600 hover:cursor-pointer hover:bg-gray-50">
                  Click
                </button>
              </div>
            </details>
            <details
              className="collapse bg-base-100 border border-base-300 group"
              name="my-accordion-det-1"
            >
              <summary className="collapse-title text-slate-700 font-semibold after:absolute after:right-6 after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rotate-45 after:border-b-2 after:border-r-2 after:content-[''] [&::-webkit-details-marker]:hidden group-open:after:-rotate-135">
                Alat Interaktif
              </summary>
              <div className="collapse-content">
                <button className="w-full rounded-md px-4 py-2 text-left text-sm text-gray-600 hover:cursor-pointer hover:bg-gray-50">
                  Kalkulator Statistik
                </button>
                <button className="w-full rounded-md px-4 py-2 text-left text-sm text-gray-600 hover:cursor-pointer hover:bg-gray-50">
                  Visualisasi Data
                </button>
                <button className="w-full rounded-md px-4 py-2 text-left text-sm text-gray-600 hover:cursor-pointer hover:bg-gray-50">
                  Simulasi Statistik
                </button>
              </div>
            </details>

            <NavLink
              to="/login"
              className={({ isActive }) =>
                `rounded-md px-4 py-3 font-semibold transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-50 text-utama"
                    : "text-slate-700 hover:bg-gray-100"
                }`
              }
            >
              Kuis & Tantangan
            </NavLink>

            <details
              className="collapse bg-base-100 border border-base-300 group"
              name="my-accordion-det-1"
            >
              <summary className="collapse-title text-slate-700 font-semibold after:absolute after:right-6 after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rotate-45 after:border-b-2 after:border-r-2 after:content-[''] [&::-webkit-details-marker]:hidden group-open:after:-rotate-135">
                Magang dan Riset
              </summary>
              <div className="collapse-content">
                <button className="w-full rounded-md px-4 py-2 text-left text-sm text-gray-600 hover:cursor-pointer hover:bg-gray-50">
                  Program Magang
                </button>
                <button className="w-full rounded-md px-4 py-2 text-left text-sm text-gray-600 hover:cursor-pointer hover:bg-gray-50">
                  Kolaborasi Riset Mandiri
                </button>
              </div>
            </details>

            <div className="mt-6 border-t border-gray-200 pt-4">
              <Link
                to="/login"
                className="block w-full rounded-md bg-second px-4 py-3 text-center font-medium text-white transition-colors duration-200 hover:bg-second-hover"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
