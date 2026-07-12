import { FaLocationDot } from "react-icons/fa6";

import Button from "../ui/Button";
import SocialIcons from "../ui/SocialIcons";

import { personalInfo } from "../../data/portfolioData";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-50"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
        {/* Left Side */}
        <div>
          <p className="text-blue-600 text-lg font-medium">
            {personalInfo.greeting}
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            {personalInfo.name}
          </h1>

          <h2 className="text-2xl text-gray-600 mt-4">
            {personalInfo.role}
          </h2>

          <p className="text-gray-600 leading-8 mt-6 max-w-xl">
            {personalInfo.description}
          </p>

          <div className="flex items-center gap-2 mt-6 text-gray-500">
            <FaLocationDot className="text-red-500" />
            <span>{personalInfo.location}</span>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              text="Hire Me"
              variant="primary"
            />

            <Button
              text="Download Resume"
              variant="secondary"
            />
          </div>

          <SocialIcons />
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src={personalInfo.image}
            alt={personalInfo.name}
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-500 shadow-2xl hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;