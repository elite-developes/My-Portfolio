function SkillCard({
  icon,
  name,
  category,
}) {
  return (
    <div
      className="
      group
      bg-white
      border
      border-gray-200
      rounded-2xl
      p-6
      text-center
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
      "
    >
      {/* Icon */}

      <div
        className="
        flex
        justify-center
        items-center
        w-16
        h-16
        mx-auto
        rounded-full
        bg-blue-50
        text-blue-600
        text-3xl
        transition-all
        duration-300
        group-hover:bg-blue-600
        group-hover:text-white
        "
      >
        {icon}
      </div>

      {/* Skill Name */}

      <h3
        className="
        mt-5
        text-xl
        font-semibold
        "
      >
        {name}
      </h3>

      {/* Category */}

      <p
        className="
        mt-2
        text-gray-500
        "
      >
        {category}
      </p>
    </div>
  );
}

export default SkillCard;