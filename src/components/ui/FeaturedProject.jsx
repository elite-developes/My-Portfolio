import Button from "./Button";

function FeaturedProject({ project }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/95">

      <div className="grid lg:grid-cols-2">

        {/* Left Side - Screenshot */}

        <div className="overflow-hidden bg-slate-100">

          <img
            src={project.image}
            alt={project.title}
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

        {/* Right Side */}

        <div className="p-10 flex flex-col justify-center">

          <span
            className="
            inline-flex
            w-fit
            px-4
            py-2
            rounded-full
            bg-blue-100
            text-blue-700
            text-sm
            font-semibold
            "
          >
            ⭐ Featured Project
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            {project.title}
          </h2>

          <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
            {project.description}
          </p>

          {/* Technologies */}

          <div
            className="
            flex
            flex-wrap
            gap-3
            mt-8
            "
          >
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300">

                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-10">

            {project.live && (
              <Button
                text="Live Demo"
                href={project.live}
                target="_blank"
              />
            )}

            <Button
              text="GitHub"
              href={project.github}
              target="_blank"
              variant="secondary"
            />

          </div>

        </div>

      </div>
    </div>
  );
}

export default FeaturedProject;