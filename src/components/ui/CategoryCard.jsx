function CategoryCard({
  title,
  children,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/95">
      <h3 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>

      {children}
    </div>
  );
}

export default CategoryCard;