import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCloud,
  FaAws,
  FaDocker,
  FaJenkins,
  FaPython,
  FaLinux,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiPostman,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiKubernetes,
  SiGithubactions,
  SiDjango,
  SiFastapi,
  SiMysql,
  SiMongodb,
  SiLinux,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

import SectionHeading from "../ui/SectionHeading";
import CategoryCard from "../ui/CategoryCard";

import { skillCategories } from "../../data/portfolioData";
import { FaAmazon } from "react-icons/fa6";

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
  "Python":<FaPython />,
  "Django":<SiDjango />,
  "FastApi":<SiFastapi />,
  "MySql":<SiMysql/>,
  "Mongodb":<SiMongodb/>,
  "Linux":<SiLinux />,
  "Cloud Services": <FaAws />,
  "Docker": <FaDocker/>,
  "Kubernetes": <SiKubernetes/>,
  "Jenkins":<FaJenkins/>,
  "GitHub Actions":<SiGithubactions/>,
};

  return (
    <section id="skills" className="scroll-mt-24 bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-8">
        <SectionHeading
          subtitle="Skills"
          title="Technologies I Work With"
          description="The technologies and tools I use to build responsive and scalable applications."
        />

        <div className="mt-16 space-y-10">

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