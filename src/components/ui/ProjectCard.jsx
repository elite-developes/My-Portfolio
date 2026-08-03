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
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/95">

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

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
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
            <span key={tech} className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">

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