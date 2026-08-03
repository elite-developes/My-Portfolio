import { useEffect, useState } from "react";
import { HiMenu, HiMoon, HiSun, HiX } from "react-icons/hi";

import Button from "../ui/Button";
import { navLinks, personalInfo } from "../../data/portfolioData";
import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    function handleScroll() {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveSection(id);
        }
      });
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">
        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-extrabold text-blue-600 transition-all hover:scale-105 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          {personalInfo.logo}
        </a>

        {/* Desktop */}

        <div className="ml-auto hidden items-center gap-4 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");

              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`relative font-semibold transition-all duration-300 ${
                      activeSection === sectionId
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-slate-700 hover:-translate-y-0.5 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                    }

                      after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 ${
                        activeSection === sectionId
                          ? "after:w-full"
                          : "after:w-0 hover:after:w-full"
                      }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <Button text="Resume" href={personalInfo.resume} target="_blank" />

          <button
            onClick={toggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <HiSun /> : <HiMoon />}
          </button>
        </div>

        {/* Mobile */}

        <div className="ml-auto flex items-center gap-3 md:hidden">
          <button
            onClick={toggleMenu}
            className="text-3xl text-slate-700 dark:text-slate-200"
            aria-label="Toggle Navigation"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>

          <button
            onClick={toggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <HiSun /> : <HiMoon />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
          <ul className="flex flex-col gap-5 px-8 py-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="text-slate-700 transition hover:-translate-y-0.5 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <Button text="Resume" href={personalInfo.resume} target="_blank" fullWidth />
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;