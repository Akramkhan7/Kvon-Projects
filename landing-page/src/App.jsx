import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";
import { movies } from "./data";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <div className="pb-20">
        <MovieRow title="Trending Now" movies={movies} />
        <MovieRow title="Top Picks For You" movies={movies} />
      </div>
    </div>
  );
}

export default App;
