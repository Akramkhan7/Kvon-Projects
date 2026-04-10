import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";

const Navbar = () => {

  const location = useLocation();
  const isHome = location.pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600"
      : "hover:text-blue-500 transition-colors";

  return (
    <nav
      className={`w-full px-8 py-4 flex items-center justify-between z-50 transition-all duration-300 border-b ${
        isHome
          ? "bg-transparent border-gray-300/30 text-gray-800"
          : "bg-white border-gray-300 text-gray-700"
      }`}
    >
      {/* LOGO */}
      <NavLink to="/" className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
          ✈️
        </div>
      </NavLink>

      {/* NAV LINKS */}
      <ul className="hidden md:flex items-center gap-10 font-medium">
        <li><NavLink to="/" end className={linkClass}>Home</NavLink></li>
        <li><NavLink to="/packages" className={linkClass}>Packages</NavLink></li>
        <li><NavLink to="/flights" className={linkClass}>Flights</NavLink></li>
        <li><NavLink to="/hotels" className={linkClass}>Hotels</NavLink></li>
        <li><NavLink to="/visa" className={linkClass}>Visa</NavLink></li>
        <li><NavLink to="/currency" className={linkClass}>Currency</NavLink></li>
        <li><NavLink to="/insurance" className={linkClass}>Insurance</NavLink></li>
        <li><NavLink to="/planner" className={linkClass}>Planner</NavLink></li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4 relative">

        {/* USER ICON */}
        <button className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition">
          <User size={20} className="text-blue-600" />
        </button>

        {/* HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* DROPDOWN MENU */}
        {menuOpen && (
          <div className="absolute top-14 right-0 w-52 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden">
            <NavLink to="/about" className="block px-4 py-3 hover:bg-blue-50">About Us</NavLink>
            <NavLink to="/contact" className="block px-4 py-3 hover:bg-blue-50">Contact Us</NavLink>
            <NavLink to="/testimonials" className="block px-4 py-3 hover:bg-blue-50">Testimonials</NavLink>
            <NavLink to="/career" className="block px-4 py-3 hover:bg-blue-50">Career</NavLink>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;