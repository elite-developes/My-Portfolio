import { projects } from "../../data/portfolioData";

import ProjectCard from "../ui/ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            "
          >
            Projects
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
            Here are some projects that
            showcase my frontend development
            skills and problem-solving
            abilities.
          </p>
        </div>

        {/* Grid */}
        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          mt-16
          "
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={
                project.technologies
              }
              github={project.github}
              live={project.live}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;