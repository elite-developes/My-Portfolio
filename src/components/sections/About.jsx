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
    <section
      id="about"
      className="py-24 bg-slate-50 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <SectionHeading
          subtitle="About Me"
          title="Cloud & DevOps Engineer"
          description="Turning manual, repetitive tasks into automated pipelines. Still early in my journey, but driven, hands-on, and ready to grow."
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div className="flex justify-center">

            <div
              className="
              w-80
              h-80
              rounded-3xl
              overflow-hidden
              shadow-xl
              "
            >
              <img
                src={personalInfo.image}
                alt={personalInfo.name}
                className="
                w-full
                h-full
                object-cover
                hover:scale-105
                transition-transform
                duration-500
                "
              />
            </div>

          </div>

          {/* Right */}

          <div>

            <h3
              className="
              text-3xl
              font-bold
              text-slate-900
              "
            >
              Who am I?
            </h3>

            <p
              className="
              mt-6
              text-slate-600
              leading-8
              "
            >
              {about.description}
            </p>

            <div
              className="
              grid
              sm:grid-cols-2
              gap-5
              mt-10
              "
            >
              {highlights.map((item) => (

                <div
                  key={item.title}
                  className="
                  flex
                  items-center
                  gap-4
                  p-4
                  bg-white
                  rounded-xl
                  shadow-sm
                  hover:shadow-lg
                  transition-all
                  duration-300
                  "
                >
                  <div
                    className="
                    w-12
                    h-12
                    rounded-full
                    bg-blue-100
                    text-blue-600
                    flex
                    items-center
                    justify-center
                    text-xl
                    "
                  >
                    {item.icon}
                  </div>

                  <span
                    className="
                    font-semibold
                    text-slate-800
                    "
                  >
                    {item.title}
                  </span>

                </div>

              ))}
            </div>

            <div className="mt-10">

              <Button
                text="Download Resume"
                href={personalInfo.resume}
                target="_blank"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;