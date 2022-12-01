// Models
import { Response, Request } from "express";
// Models
// Data
import { getAllMovieService } from "../../../Services/getAllMovieService";
// Data
// Services
import { requestCloserService } from "../../../Services/requestCloserService";
// Services

export const moviesMainRoute = (req: Request, res: Response) => {
  const movies = getAllMovieService();
  res.write(JSON.stringify(movies));
  requestCloserService(res);
};
