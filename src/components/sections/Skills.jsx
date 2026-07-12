import { skillCategories } from "../../data/portfolioData";

import SkillCategory from "../ui/SkillCategory";

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            "
          >
            Skills
          </h2>

          <p
            className="
            text-gray-600
            mt-6
            max-w-2xl
            mx-auto
            leading-8
            "
          >
            These are the technologies and
            tools I use to build modern web
            applications.
          </p>
        </div>

        <div
          className="
          grid
          lg:grid-cols-3
          gap-8
          mt-16
          "
        >
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.id}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;