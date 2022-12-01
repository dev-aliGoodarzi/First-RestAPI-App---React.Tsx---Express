// Models
import { Response, Request } from "express";
// Models
// Data
import { getAllMovieService } from "./getAllMovieService";
// Data
// Services
import { requestCloser } from "./requestCloser";
// Services

export const sendAllMovies = (req: Request, res: Response) => {
  const movies = getAllMovieService();
  res.write(JSON.stringify(movies));
  requestCloser(res);
};
