import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="min-w-[220px] group relative cursor-pointer transition duration-300 hover:scale-110">
      <img
        src={movie.image}
        alt={movie.title}
        className="rounded-lg shadow-lg"
      />

      <div className="absolute bottom-0 left-0 right-0 bg-black/70 opacity-0 group-hover:opacity-100 transition p-2 rounded-b-lg">
        <p className="text-sm font-semibold">{movie.title}</p>
      </div>
    </div>
  );
}

export default MovieCard;
