import { I_Movie } from "./../Models/interface";
import { getAllMovieService } from "./getAllMovieService";
export const selectMoviesByIdService = (movieId: string): I_Movie | any => {
  const movies = getAllMovieService();
  const selectedMovieItem: I_Movie | any = movies.find(
    (item) => item.id === Number(movieId)
  );
  return selectedMovieItem;
};
