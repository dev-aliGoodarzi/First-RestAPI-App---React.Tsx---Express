// Modules
import axios from "axios";
import Swal from "sweetalert2";
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
      setMovies(res.data);
      return res.data;
    })
    .catch(() => {
      Swal.fire({
        icon: "error",
        title: "Error In Fetch Movies",
      });
      return false;
    });
};
