// Express
import { Request, Response } from "express";
// Express
// Schemas
import { _validationSchema } from "./../../../../Schema/_validationSchema";
// Schemas
// Services
import { requestCloserService } from "./../../../../Services/requestCloserService";
// Services

export const editMovieById = (req: Request, res: Response) => {
  const validationSchema = _validationSchema();

  const { name, id, description, price, image } = req.body;

  validationSchema.isValid(req.body).then((isValid: boolean) => {
    if (isValid) {
      requestCloserService(res);
      return;
    } else {
      requestCloserService(res);
      return;
    }
  });
};
