import SocialIcons from "../ui/SocialIcons";
import { personalInfo } from "../../data/portfolioData";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
          "
        >

          {/* Left */}

          <div className="text-center md:text-left">

            <h2 className="text-2xl font-bold">
              {personalInfo.name}
            </h2>

            <p className="text-gray-400 mt-2">
              {personalInfo.role}
            </p>

          </div>

          {/* Center */}

          <SocialIcons size="text-xl" />

          {/* Right */}

          <div className="text-center md:text-right">

            <p className="text-gray-400">
              © {currentYear}
            </p>

            <p className="text-gray-500 text-sm mt-1">
              Built with React & Tailwind CSS
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;