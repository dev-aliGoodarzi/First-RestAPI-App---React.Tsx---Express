// Express
import { Request, Response } from "express";
// Express
// Express
import { requestCloserService } from "./../../../../Services/requestCloserService";
import { selectMoviesByIdService } from "../../../../Services/selectMoviesByIdService";
import { movies } from "../../../../Data/Data";
// Services

export const deleteMovie = (req: Request, res: Response) => {
  const { movieId } = req.params;
  const selectedMovie = selectMoviesByIdService(movieId);

  if (!!selectedMovie) {
    const selectedMovieIndex = movies.findIndex(
      (item) => item.id === Number(movieId)
    );
    movies.splice(selectedMovieIndex, selectedMovieIndex + 1);

    res
      .status(200)
      .write(`selected Item Was be in Index ${selectedMovieIndex} & removed !`);
    requestCloserService(res);
    return;
  }
  res.status(404).write("Selected Movie Not Found !");
  requestCloserService(res);
  return;
};
