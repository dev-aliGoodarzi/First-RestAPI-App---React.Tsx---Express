// React
import React, { useState, useEffect } from "react";
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

  return <div>App</div>;
};

export default App;
