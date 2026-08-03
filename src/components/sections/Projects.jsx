import SectionHeading from "../ui/SectionHeading";
import FeaturedProject from "../ui/FeaturedProject";
import ProjectCard from "../ui/ProjectCard";

import { projects } from "../../data/portfolioData";

function Projects() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section id="projects" className="scroll-mt-24 bg-slate-50 py-24 dark:bg-slate-900/70">
      <div className="mx-auto max-w-7xl px-8">

        <SectionHeading
          subtitle="Portfolio"
          title="Featured Projects"
          description="Here are some of the projects I've built while learning modern frontend development."
        />

        {/* Featured */}

        {featuredProject && (
          <FeaturedProject project={featuredProject} />
        )}

        {/* Other Projects */}

        <div className="mt-24">

          <div className="flex items-center justify-between mb-10">

            <h3
              className="
              text-3xl
              font-bold
              text-slate-900
              "
            >
              More Projects
            </h3>

            <span className="text-slate-500">
              {otherProjects.length} Projects
            </span>

          </div>

          <div
            className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
            "
          >
            {otherProjects.map((project, index) => (

              <ProjectCard
                key={project.id}
                index={index}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                github={project.github}
                live={project.live}
                featured={false}
                year={project.year}
              />

            ))}
          </div>

        </div>

        {/* Bottom */}

        <div className="flex justify-center mt-20">

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex
            items-center
            gap-3
            px-8
            py-4
            rounded-full
            bg-slate-900
            text-white
            font-semibold
            transition-all
            duration-300
            hover:bg-blue-600
            hover:-translate-y-1
            "
          >
            View All Projects
          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;