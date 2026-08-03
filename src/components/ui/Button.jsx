import { FaArrowRight } from "react-icons/fa";

function Button({
  text,
  href,
  onClick,
  type = "button",
  variant = "primary",
  icon = true,
  loading = false,
  disabled = false,
  target,
  fullWidth = false,
}) {
  const baseClasses = `
    inline-flex
    items-center
    justify-center
    gap-2
    px-6
    py-3
    rounded-xl
    font-semibold
    transition-all
    duration-300
    hover:-translate-y-1
    active:translate-y-0
    disabled:opacity-60
    disabled:cursor-not-allowed
    group
  `;

  const variants = {
    primary: `
      bg-blue-600
      text-white
      shadow-md
      hover:bg-blue-700
      hover:shadow-xl
    `,

    secondary: `
      bg-slate-100
      text-slate-800
      hover:bg-slate-200
      dark:bg-slate-800
      dark:text-slate-200
      dark:hover:bg-slate-700
    `,

    outline: `
      border
      border-blue-600
      text-blue-600
      hover:bg-blue-600
      hover:text-white
      dark:border-blue-400
      dark:text-blue-400
      dark:hover:bg-blue-500
    `,
  };

  const className = `
    ${baseClasses}
    ${variants[variant]}
    ${fullWidth ? "w-full" : ""}
  `;

  const content = (
    <>
      {loading ? (
        <>
          <span
            className="
              w-4
              h-4
              rounded-full
              border-2
              border-white
              border-t-transparent
              animate-spin
            "
          />
          Loading...
        </>
      ) : (
        <>
          <span>{text}</span>

          {icon && (
            <FaArrowRight
              className="
                text-sm
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          )}
        </>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={
          target === "_blank"
            ? "noopener noreferrer"
            : undefined
        }
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={className}
    >
      {content}
    </button>
  );
}

export default Button;