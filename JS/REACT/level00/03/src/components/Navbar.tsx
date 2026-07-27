const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-6">
        <li>
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;