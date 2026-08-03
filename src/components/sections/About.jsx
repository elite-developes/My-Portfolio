import {
  FaCode,
  FaInfinity,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";

import { about, personalInfo } from "../../data/portfolioData";

function About() {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Clean Code",
    },
    {
      icon: <FaInfinity />,
      title: "Automation",
    },
    {
      icon: <FaRocket />,
      title: "Performance Focused",
    },
    {
      icon: <FaLightbulb />,
      title: "Fast Learner",
    },
  ];

  return (
    <section id="about" className="scroll-mt-24 bg-slate-50 py-24 dark:bg-slate-900/70">
      <div className="mx-auto max-w-7xl px-8">
        <SectionHeading
          subtitle="About Me"
          title="Cloud & DevOps Engineer"
          description="Turning manual, repetitive tasks into automated pipelines. Still early in my journey, but driven, hands-on, and ready to grow."
        />

        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}

          <div className="flex justify-center">
            <div className="h-80 w-80 overflow-hidden rounded-3xl shadow-xl">
              <img
                src={personalInfo.image}
                alt={personalInfo.name}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right */}

          <div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Who am I?</h3>

            <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">{about.description}</p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-slate-800/90"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
                    {item.icon}
                  </div>

                  <span className="font-semibold text-slate-800 dark:text-slate-200">{item.title}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button text="Download Resume" href={personalInfo.resume} target="_blank" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;