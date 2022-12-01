import { requestCloser } from "./requestCloser";
// Express
import { Request, Response } from "express";
// Express
// Models
import { I_Movie } from "./../Models/interface";
// Models
// Services
import { getAllMovieService } from "./getAllMovieService";
// Services

export const selectMovieByIdService = (req: Request, res: Response) => {
  const { movieId } = req.params;
  const movies = getAllMovieService();
  const selectedMovieItem: I_Movie | any = movies.find(
    (item) => item.id === Number(movieId)
  );
  if (!!selectedMovieItem) {
    res.write(JSON.stringify(selectedMovieItem));
    requestCloser(res);
    return;
  } else {
    res.status(404).write(JSON.stringify("Not Found"));
    requestCloser(res);
    return;
  }
};
