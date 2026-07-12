import { navLinks } from "../../data/portfolioData";

function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          Elite
        </h1>

        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="hover:text-blue-600"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;