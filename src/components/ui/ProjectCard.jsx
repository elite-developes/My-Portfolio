import Button from "./Button";

function ProjectCard({
  image,
  title,
  description,
  technologies,
  github,
  live,
}) {
  return (
    <div
      className="
      group
      bg-white
      rounded-2xl
      shadow-lg
      overflow-hidden
      hover:-translate-y-2
      hover:shadow-xl
      transition
      duration-300
      "
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
          w-full
          h-52
          object-cover
          transition
          duration-500
          group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="text-gray-600 mt-4 leading-7">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="
              bg-blue-100
              text-blue-700
              px-3
              py-1
              rounded-full
              text-sm
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <Button
            text="GitHub"
            href={github}
            variant="secondary"
            target="_blank"
          />

          <Button
            text="Live Demo"
            href={live}
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;