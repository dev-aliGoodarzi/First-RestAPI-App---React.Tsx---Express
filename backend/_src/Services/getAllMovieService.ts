// Models
import { I_Movie } from "./../Models/interface";
// Models
// Data
import { movies } from "./../Data/Data";
// Data

export const getAllMovieService = (): I_Movie[] => {
  return movies;
};
