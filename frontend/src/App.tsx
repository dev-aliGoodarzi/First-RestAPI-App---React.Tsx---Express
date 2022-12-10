// React
import React, { useState, useEffect } from "react";
import Hr from "./Components/Hr/Hr";
import MovieCard from "./Components/MovieCard/MovieCard";
import { I_Movie } from "./Models/interfaces";
import { getMoviesListService } from "./Services/getMoviesListService";
// React

const App = () => {
  // Constants
  const fullGetMoviesURL = "http://localhost:3100/api/movies";
  // Constants
  // State
  const [movies, SetMovies] = useState<I_Movie[]>([]);
  // State
  // LifeCycles
  useEffect(() => {
    getMoviesListService(fullGetMoviesURL, SetMovies);
  }, []);
  // LifeCycles

  return (
    <div className="flex flex-col items-center justify-start w-full h-max">
      <Hr text="Welcome To My First FullStack App !" />
      <div className="flex flex-row items-center justify-between flex-wrap w-full px-2">
        {movies.map((item) => (
          <MovieCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
