import {
  FaCode,
  FaReact,
  FaMobileAlt,
  FaRocket,
} from "react-icons/fa";

function FeatureCard({
  icon,
  title,
  description,
}) {
  const icons = {
    code: <FaCode />,
    react: <FaReact />,
    mobile: <FaMobileAlt />,
    rocket: <FaRocket />,
  };

  return (
    <div
      className="
      bg-white
      rounded-2xl
      shadow-lg
      p-6
      hover:-translate-y-2
      hover:shadow-xl
      transition
      duration-300
      "
    >
      <div className="text-4xl text-blue-600 mb-4">
        {icons[icon]}
      </div>

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-600 leading-7">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;