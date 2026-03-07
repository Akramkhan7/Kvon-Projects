import React from "react";

function Navbar() {
  return (
    <div className="fixed w-full z-50 bg-gradient-to-b from-black via-black/80 to-transparent px-10 py-4 flex justify-between items-center">
      <h1 className="text-red-600 text-3xl font-extrabold tracking-wide">
        NETFLIX
      </h1>

      <div className="space-x-6 text-sm font-medium hidden md:flex">
        <span className="hover:text-gray-400 cursor-pointer">Home</span>
        <span className="hover:text-gray-400 cursor-pointer">TV Shows</span>
        <span className="hover:text-gray-400 cursor-pointer">Movies</span>
        <span className="hover:text-gray-400 cursor-pointer">My List</span>
      </div>

      <div className="w-8 h-8 rounded-full bg-gray-600"></div>
    </div>
  );
}

export default Navbar;
