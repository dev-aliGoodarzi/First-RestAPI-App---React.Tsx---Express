import { requestCloser } from "./requestCloser";
// Express
import { Request, Response } from "express";
// Express
// Third Party Modules
import * as yup from "yup";
// Third Party Modules
// Data
import { movies } from "../Data/Data";
import { object } from "joi";
// Data

export const postNewMovieService = (req: Request, res: Response) => {
  const { name, price, description, image, id } = req.body;
  const validationSchema = yup.object({
    id: yup.number().min(1).required(),
    name: yup.string().min(3).required(),
    description: yup.string().min(5).required(),
    price: yup.number().min(1).required(),
    image: yup.string().optional(),
  });

  validationSchema.isValid(req.body).then((isValid: boolean) => {
    if (isValid) {
      isValid && movies.push({ name, price, description, image, id });
      requestCloser(res);
      console.log("movies Pushed !");
      return;
    } else {
      res.status(400).write(JSON.stringify("err"));
      console.log("Err");
      requestCloser(res);
      return;
    }
  });
};
