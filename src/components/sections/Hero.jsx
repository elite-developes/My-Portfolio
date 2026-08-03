import Button from "../ui/Button";
import SocialIcons from "../ui/SocialIcons";

import { personalInfo } from "../../data/portfolioData";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 px-0 py-16 scroll-mt-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-8 py-24 lg:grid-cols-2">
        {/* Left Content */}

        <div>
          {/* Availability Badge */}

          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 dark:bg-green-900/40 dark:text-green-300">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            Available for Opportunities
          </div>

          {/* Greeting */}

          <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-600 dark:text-blue-400">
            {personalInfo.greeting}
          </p>

          {/* Name */}

          <h1 className="mt-4 text-6xl font-extrabold leading-none text-slate-900 dark:text-white md:text-7xl">
            {personalInfo.name}
          </h1>

          {/* Role */}

          <h2 className="mt-6 text-3xl font-semibold text-slate-700 dark:text-slate-300">
            {personalInfo.role}
          </h2>

          {/* Description */}

          <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600 dark:text-slate-400">
            {personalInfo.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-slate-600 dark:text-slate-400">
            <span>📍 Delhi, India</span>

            <span>💼 Open for opportunities</span>

            <span>⚡ Devops Enthusiast</span>
          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-6">
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

          <div className="rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 p-2 shadow-2xl">
            {/* White Ring */}

            <div className="rounded-full bg-white p-2 dark:bg-slate-900">
              {/* Image */}

              <div className="h-80 w-80 overflow-hidden rounded-full md:h-[420px] md:w-[420px]">
                <img
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 hidden flex-col items-center -translate-x-1/2 text-slate-500 lg:flex dark:text-slate-400">
        <span className="text-sm uppercase tracking-widest">Scroll</span>

        <span className="mt-2 text-2xl">↓</span>
      </div>
    </section>
  );
}

export default Hero;
