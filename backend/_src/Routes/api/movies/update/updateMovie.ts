import { _validationSchema } from "./../../../../Schema/_validationSchema";
// Express
import { Request, Response } from "express";
// Express
// Services
import { selectMoviesByIdService } from "../../../../Services/selectMoviesByIdService";
// Services

export const updateMovie = (req: Request, res: Response) => {
  const { movieId } = req.params;
  const selectedMovie = selectMoviesByIdService(movieId);
  const validationSchema = _validationSchema({
    description: false,
    image: false,
    name: false,
    price: false,
  });
};
