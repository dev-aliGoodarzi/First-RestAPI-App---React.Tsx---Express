// Modules
import axios from "axios";
// Modules
// Models
import { I_Movie } from "../Models/interfaces";
// Models
export const getMoviesListService = (
  fullApiURL: string,
  setMovies: React.Dispatch<React.SetStateAction<I_Movie[]>>
): Promise<I_Movie | boolean> => {
  return axios
    .get(fullApiURL)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch(() => {
      return false;
    });
};
