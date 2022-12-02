// Express
import { Request, Response } from "express";
// Express
// Third Party Modules
import * as yup from "yup";
// Third Party Modules
// Data
import { movies } from "./../../../../Data/Data";
// Data
// Schemas
import { _validationSchema } from "./../../../../Schema/_validationSchema";
// Schemas
// Services
import { requestCloserService } from "./../../../../Services/requestCloserService";
// Services

export const newMovie = (req: Request, res: Response) => {
  const { name, price, description, image } = req.body;

  const validationSchema = _validationSchema();

  validationSchema.isValid(req.body).then((isValid: boolean) => {
    if (isValid) {
      const newMovie = { name, price, description, image, id: Date.now() };
      isValid && movies.push(newMovie);
      res.write(JSON.stringify(newMovie));
      requestCloserService(res);
      console.log("movies Pushed !");
      return;
    } else {
      res.status(400).write(JSON.stringify("err"));
      console.log("Err");
      requestCloserService(res);
      return;
    }
  });
};
