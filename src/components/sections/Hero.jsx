import Button from "../ui/Button";
import SocialIcons from "../ui/SocialIcons";

import { personalInfo } from "../../data/portfolioData";

function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        bg-gradient-to-br
        from-white
        via-slate-50
        to-blue-50
        scroll-mt-24
      "
    >
      <div className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Content */}

        <div>
          {/* Availability Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-green-100
              text-green-700
              text-sm
              font-medium
              mb-8
            "
          >
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Available for Opportunities
          </div>

          {/* Greeting */}

          <p
            className="
              uppercase
              tracking-[4px]
              text-sm
              font-semibold
              text-blue-600
            "
          >
            {personalInfo.greeting}
          </p>

          {/* Name */}

          <h1
            className="
              mt-4
              text-6xl
              md:text-7xl
              font-extrabold
              leading-none
              text-slate-900
            "
          >
            {personalInfo.name}
          </h1>

          {/* Role */}

          <h2
            className="
              mt-6
              text-3xl
              font-semibold
              text-slate-700
            "
          >
            {personalInfo.role}
          </h2>

          {/* Description */}

          <p
            className="
              mt-8
              max-w-xl
              text-lg
              leading-9
              text-slate-600
            "
          >
            {personalInfo.description}
          </p>

          <div className="flex flex-wrap gap-6 mt-8 text-slate-600">
            <span>📍 Delhi, India</span>

            <span>💼 Open for opportunities</span>

            <span>⚡ Devops Enthusiast</span>
          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-6 mt-10">
            <Button text="View Projects" href="#projects" />

            <Button
              text="Download Resume"
              href={personalInfo.resume}
              target="_blank"
              variant="secondary"
            />
          </div>

          {/* Social Icons */}

          <div className="mt-12">
            <SocialIcons />
          </div>
        </div>

        {/* Right Content */}

        <div className="flex justify-center">
          {/* Gradient Ring */}

          <div
            className="
              p-2
              rounded-full
              bg-gradient-to-r
              from-blue-600
              via-indigo-500
              to-cyan-400
              shadow-2xl
            "
          >
            {/* White Ring */}

            <div className="p-2 rounded-full bg-white">
              {/* Image */}

              <div
                className="
                  w-80
                  h-80
                  md:w-[420px]
                  md:h-[420px]
                  rounded-full
                  overflow-hidden
                "
              >
                <img
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <div
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          hidden
          lg:flex
          flex-col
          items-center
          text-slate-500
        "
      >
        <span className="text-sm tracking-widest uppercase">Scroll</span>

        <span className="mt-2 text-2xl">↓</span>
      </div>
    </section>
  );
}

export default Hero;
