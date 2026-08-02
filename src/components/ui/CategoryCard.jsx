function CategoryCard({
  title,
  children,
}) {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      border
      border-slate-200
      p-8
      shadow-sm
      hover:shadow-xl
      transition-all
      duration-300
      "
    >
      <h3
        className="
        text-2xl
        font-bold
        text-slate-900
        mb-8
        "
      >
        {title}
      </h3>

      {children}
    </div>
  );
}

export default CategoryCard;