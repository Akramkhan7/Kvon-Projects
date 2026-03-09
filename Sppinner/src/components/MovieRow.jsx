import React from "react";
import MovieCard from "./MovieCard";

function MovieRow({ title, movies }) {
  return (
    <div className="px-10 mt-10">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>

      <div className="flex space-x-5 overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
