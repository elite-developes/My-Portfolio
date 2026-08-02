import Button from "./Button";

function FeaturedProject({ project }) {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      border
      border-slate-200
      shadow-sm
      overflow-hidden
      transition-all
      duration-300
      hover:shadow-2xl
      "
    >
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

          <h2
            className="
            mt-6
            text-4xl
            font-bold
            text-slate-900
            "
          >
            {project.title}
          </h2>

          <p
            className="
            mt-6
            text-slate-600
            leading-8
            "
          >
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
              <span
                key={tech}
                className="
                px-4
                py-2
                rounded-full
                bg-slate-100
                text-slate-700
                text-sm
                "
              >
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