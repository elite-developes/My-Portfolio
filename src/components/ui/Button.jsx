function Button({
  text,
  href = "#",
  variant = "primary",
}) {
  const baseClasses =
    "px-6 py-3 rounded-lg font-semibold transition duration-300 inline-block";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };

  return (
    <a
      href={href}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {text}
    </a>
  );
}

export default Button;