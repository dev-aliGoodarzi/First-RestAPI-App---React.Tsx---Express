// Express
import { Request, Response } from "express";
// Express
// Services
import { requestCloserService } from "./../../../../Services/requestCloserService";
import { selectMoviesByIdService } from "./../../../../Services/selectMoviesByIdService";
// Services

export const selectById = (req: Request, res: Response) => {
  const selectedMovieItem = selectMoviesByIdService(req.params.movieId);
  if (!!selectedMovieItem) {
    res.write(JSON.stringify(selectedMovieItem));
    requestCloserService(res);
    return;
  } else {
    res.status(404).write(JSON.stringify("Not Found"));
    requestCloserService(res);
    return;
  }
};
