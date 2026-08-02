import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

import Button from "../ui/Button";
import { navLinks, personalInfo } from "../../data/portfolioData";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-x1 border-b border-slate-200 shadow-md">
      <nav className="max-w-7xl mx-auto h-24 px-8 flex items-center justify-between">
        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-extrabold text-blue-600 hover:text-blue-700 transition-all hover:scale-105"
        >
          {personalInfo.logo}
        </a>

        {/* Desktop */}

        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");

              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`
                      relative
                      font-semibold
                      transition-all
                      duration-300
                      ${
                        activeSection === sectionId
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600 hover:-translate-y-0.5"
                      }

                      after:absolute
                      after:left-0
                      after:-bottom-1
                      after:h-0.5
                      after:bg-blue-600
                      after:transition-all
                      after:duration-300
                      ${
                        activeSection === sectionId
                          ? "after:w-full"
                          : "after:w-0 hover:after:w-full"
                      }
                    `}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <Button
            text="Resume"
            href={personalInfo.resume}
            target="_blank"
          />
        </div>

        {/* Mobile */}

        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-gray-700"
          aria-label="Toggle Navigation"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <ul className="flex flex-col gap-5 px-8 py-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="text-gray-700 hover:text-blue-600 hover:-translate-y-0.5 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <Button
              text="Resume"
              href={personalInfo.resume}
              target="_blank"
              fullWidth
            />
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;