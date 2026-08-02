import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiPostman,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

import SectionHeading from "../ui/SectionHeading";
import CategoryCard from "../ui/CategoryCard";

import { skillCategories } from "../../data/portfolioData";

function Skills() {
  const icons = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <SiJavascript />,
  React: <FaReact />,
  "Tailwind CSS": <SiTailwindcss />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
  "VS Code": <VscCode />,
  Postman: <SiPostman />,
  Figma: <FaFigma />,
  TypeScript: <SiTypescript />,
  "Next.js": <SiNextdotjs />,
  "Node.js": <SiNodedotjs />,
};

  return (
    <section
      id="skills"
      className="py-24 bg-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <SectionHeading
          subtitle="Skills"
          title="Technologies I Work With"
          description="The technologies and tools I use to build responsive and scalable applications."
        />

        <div className="space-y-10 mt-16">

          {skillCategories.map((category) => (

            <CategoryCard
              key={category.title}
              title={category.title}
            >

              <div
                className="
                grid
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-5
                gap-5
                "
              >

                {category.skills.map((skill) => (

                  <div
                    key={skill}
                    className="
                    flex
                    items-center
                    gap-3
                    p-4
                    rounded-xl
                    border
                    border-slate-200
                    hover:bg-blue-50
                    hover:border-blue-300
                    transition-all
                    duration-300
                    "
                  >
                    <div
                      className="
                      text-2xl
                      text-blue-600
                      "
                    >
                      {icons[skill]}
                    </div>

                    <span
                      className="
                      font-medium
                      text-slate-700
                      "
                    >
                      {skill}
                    </span>

                  </div>

                ))}

              </div>

            </CategoryCard>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;