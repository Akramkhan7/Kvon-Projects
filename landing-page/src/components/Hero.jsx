import React from "react";

function Hero() {
  return (
    <div className="relative h-[90vh] flex items-center px-10">
      <img
        src="https://images.unsplash.com/photo-1517602302552-471fe67acf66"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

      <div className="relative z-10 max-w-xl">
        <h2 className="text-6xl font-bold mb-6 leading-tight">
          Stranger Things
        </h2>

        <p className="text-gray-300 mb-6">
          A love letter to the 80s classics that captivated a generation.
        </p>

        <div className="space-x-4">
          <button className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition">
            ▶ Play
          </button>

          <button className="bg-gray-700/80 px-8 py-3 rounded font-semibold hover:bg-gray-600 transition">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
