// Models
import { movieModel } from "../Models/productsModel";
import { I_Movie } from "./../Models/interface";
// Models

export const selectMoviesByIdService = (movieName: string): I_Movie | any => {
  const selectedMovieItem: I_Movie | any = movieModel.find({ name: movieName });
  return selectedMovieItem;
};
