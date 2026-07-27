import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 shadow">
      <h1 className="text-xl font-bold">Header</h1>
      <Navbar />
    </header>
  );
};

export default Header;
