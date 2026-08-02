function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
}) {
  const alignment = {
    center: "text-center mx-auto",
    left: "text-left",
  };

  return (
    <div
      className={`
        max-w-3xl
        mb-16
        ${alignment[align]}
      `}
    >
      {/* Subtitle */}

      <p
        className="
        text-blue-600
        font-semibold
        uppercase
        tracking-[3px]
        "
      >
        {subtitle}
      </p>

      {/* Title */}

      <h2
        className="
        mt-4
        text-4xl
        md:text-5xl
        font-bold
        leading-tight
        "
      >
        {title}
      </h2>

      {/* Description */}

      {description && (
        <p
          className="
          mt-6
          text-slate-600
          leading-8
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;