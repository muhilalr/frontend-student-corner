import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Dropdown from "../Dropdown/Index";
import bps from "../../../assets/logo-bps.jpg";

const subjectItems = [
  {
    label: "Subjek 1",
    materials: [
      { label: "Materi 1", to: "/subjects/subjek-1/materi-1" },
      { label: "Materi 2", to: "/subjects/subjek-1/materi-2" },
      { label: "Materi 3", to: "/subjects/subjek-1/materi-3" },
      { label: "Materi 4", to: "/subjects/subjek-1/materi-4" },
      { label: "Materi 5", to: "/subjects/subjek-1/materi-5" },
    ],
  },
  {
    label: "Subjek 2",
    materials: [
      { label: "Materi 1", to: "/subjects/subjek-2/materi-1" },
      { label: "Materi 2", to: "/subjects/subjek-2/materi-2" },
      { label: "Materi 3", to: "/subjects/subjek-2/materi-3" },
      { label: "Materi 4", to: "/subjects/subjek-2/materi-4" },
      { label: "Materi 5", to: "/subjects/subjek-2/materi-5" },
    ],
  },
];

const navItems = [
  { label: "Home", to: "/" },
  { label: "Login", to: "/login" },
  { label: "Register", to: "/register" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubjectMenuOpen, setIsSubjectMenuOpen] = useState(false);
  const [expandedSubject, setExpandedSubject] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSubjectMenuOpen(false);
    setExpandedSubject(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setIsSubjectMenuOpen(false);
        setExpandedSubject(null);
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

  const toggleSubject = (label) => {
    setExpandedSubject((prev) => (prev === label ? null : label));
  };

  const toggleMobileSubjectMenu = () => {
    setIsSubjectMenuOpen((prev) => {
      const next = !prev;

      if (!next) {
        setExpandedSubject(null);
      }

      return next;
    });
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsSubjectMenuOpen(false);
    setExpandedSubject(null);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
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
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
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
          <div>
            <p className="text-base font-bold text-slate-900">Menu</p>
            <p className="text-xs text-slate-500">Navigasi Student Corner</p>
          </div>

          <button
            type="button"
            className="rounded-xl border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100"
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
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-blue-50 text-primary"
                      : "text-slate-700 hover:bg-slate-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="rounded-2xl border border-slate-200 p-2">
              <button
                type="button"
                className="flex w-full items-center justify-between px-2 py-2 text-left text-sm font-semibold text-slate-900"
                onClick={toggleMobileSubjectMenu}
                aria-expanded={isSubjectMenuOpen}
              >
                Subjek Materi
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isSubjectMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isSubjectMenuOpen && (
                <div className="mt-2 flex flex-col gap-2">
                  {subjectItems.map((subject) => {
                    const isExpanded = expandedSubject === subject.label;

                    return (
                      <div
                        key={subject.label}
                        className="rounded-xl bg-slate-50"
                      >
                        <button
                          type="button"
                          className="flex w-full items-center justify-between px-4 py-3 text-left font-medium text-slate-700"
                          onClick={() => toggleSubject(subject.label)}
                          aria-expanded={isExpanded}
                        >
                          {subject.label}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isExpanded && (
                          <div className="space-y-1 px-3 pb-3">
                            {subject.materials.map((material) => (
                              <Link
                                key={material.to}
                                to={material.to}
                                className="block rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-blue-50 hover:text-primary"
                              >
                                {material.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 p-4">
          <Link
            to="/login"
            className="block rounded-xl bg-second px-4 py-3 text-center font-semibold text-white transition-colors duration-200 hover:bg-second-hover"
            onClick={closeMobileMenu}
          >
            Mulai Sekarang
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
