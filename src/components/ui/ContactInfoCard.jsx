function ContactInfoCard({
  icon,
  title,
  value,
  href,
}) {
  const content = (
    <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/95">

      <div
        className="
        w-14
        h-14
        rounded-2xl
        bg-blue-100
        text-blue-600
        flex
        items-center
        justify-center
        text-2xl
        transition-all
        duration-300
        group-hover:bg-blue-600
        group-hover:text-white
        "
      >
        {icon}
      </div>

      <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-2 break-all text-slate-600 dark:text-slate-400">
        {value}
      </p>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return content;
}

export default ContactInfoCard;