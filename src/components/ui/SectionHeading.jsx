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
    <div className={`mb-16 max-w-3xl ${alignment[align]}`}>
      {/* Subtitle */}

      <p className="font-semibold uppercase tracking-[3px] text-blue-600 dark:text-blue-400">{subtitle}</p>

      {/* Title */}

      <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">{title}</h2>

      {/* Description */}

      {description && <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">{description}</p>}
    </div>
  );
}

export default SectionHeading;