import Button from "./Button";

function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
  live,
  featured = false,
}) {
  return (
    <article
      className="
      bg-white
      rounded-2xl
      overflow-hidden
      border
      border-gray-200
      shadow-sm
      hover:shadow-xl
      transition-all
      duration-300
      hover:-translate-y-2
      "
    >
      {/* Project Image */}

      <div className="relative overflow-hidden">

        {featured && (
          <span
            className="
            absolute
            top-4
            left-4
            z-10
            bg-blue-600
            text-white
            text-xs
            font-semibold
            px-3
            py-1
            rounded-full
            "
          >
            Featured
          </span>
        )}

        <img
          src={image}
          alt={title}
          className="
          w-full
          h-60
          object-cover
          transition-transform
          duration-500
          hover:scale-105
          "
        />
      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p
          className="
          mt-4
          text-slate-600
          leading-7
          "
        >
          {description}
        </p>

        {/* Technologies */}

        <div
          className="
          flex
          flex-wrap
          gap-2
          mt-6
          "
        >
          {(technologies ?? []).map((tech) => (
            <span
              key={tech}
              className="
              bg-blue-50
              text-blue-700
              text-sm
              px-3
              py-1
              rounded-full
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">

          <Button
            text="Live Demo"
            href={live}
            target="_blank"
          />

          <Button
            text="GitHub"
            href={github}
            target="_blank"
            variant="secondary"
          />

        </div>

      </div>
    </article>
  );
}

export default ProjectCard;