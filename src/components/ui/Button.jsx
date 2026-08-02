import { motion } from "framer-motion";

function Button({
  text,
  href = "#",
  variant = "primary",
  target = "_self",
}) {
  const baseClasses =
    "inline-block px-6 py-3 rounded-lg font-semibold transition duration-300";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };

  return (
    <motion.a
      href={href}
      target={target}
      rel={
        target === "_blank"
          ? "noopener noreferrer"
          : undefined
      }
      whileHover={{
        scale: 1.05,
        y: -3,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {text}
    </motion.a>
  );
}

export default Button;