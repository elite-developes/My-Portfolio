import { useEffect, useState } from "react";

function SkillCard({ name, level }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, 200);

    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <h4 className="font-medium">
          {name}
        </h4>

        <span className="text-sm text-gray-500">
          {level}%
        </span>
      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-1000"
          style={{
            width: `${width}%`,
          }}
        />
      </div>
    </div>
  );
}

export default SkillCard;