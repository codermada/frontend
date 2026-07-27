const Nav = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Logo</h1>

        {/* Navigation Links */}
        <ul className="hidden gap-8 md:flex">
          <li>
            <a href="/" className="text-gray-700 transition hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-gray-700 transition hover:text-blue-600"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="text-gray-700 transition hover:text-blue-600"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-gray-700 transition hover:text-blue-600"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Button */}
        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Nav;