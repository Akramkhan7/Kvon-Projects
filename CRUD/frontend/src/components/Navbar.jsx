const Navbar = () => (
  <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-sm">
    <div className="font-bold text-lg tracking-tight">LOGO</div>
    <div className="flex gap-8 text-sm font-medium text-gray-600">
      <a href="#" className="hover:text-black">HOME</a>
      <a href="#" className="hover:text-black">ABOUT</a>
      <a href="#" className="hover:text-black">CONTACT</a>
    </div>
  </nav>
);

export default Navbar;