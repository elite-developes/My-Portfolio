import SkillCard from "./SkillCard";

function SkillCategory({
  title,
  skills,
}) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      shadow-lg
      p-8
      "
    >
      <h3
        className="
        text-2xl
        font-bold
        text-blue-600
        mb-8
        "
      >
        {title}
      </h3>

      <div className="space-y-6">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;