// Models
import { I_Movie } from "./../Models/interface";
// Models
// Data
import { movies } from "./../Data/Data";
import movieSchema from "../Schema/movieSchema";
import { movieModel } from "../Models/productsModel";
// Data

export const getAllMovieService = () => {
  return movieModel.find();
};
