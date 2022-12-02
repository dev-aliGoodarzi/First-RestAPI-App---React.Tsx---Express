import { requestCloserService } from "./../../../../Services/requestCloserService";
import { getAllMovieService } from "./../../../../Services/getAllMovieService";
import { _validationSchema } from "./../../../../Schema/_validationSchema";
// Express
import { Request, Response } from "express";
// Express
// Services
// Services

export const updateMovie = (req: Request, res: Response) => {
  const { movieId } = req.params;
  const validationSchema = _validationSchema();
  const allMovies = getAllMovieService();
  const selectedMovieIndex = allMovies.findIndex(
    (item) => item.id === Number(movieId)
  );
  console.log(selectedMovieIndex);
  const { name, description, image, price } = req.body;
  if (selectedMovieIndex > -1) {
    validationSchema.isValid(req.body).then((isValid: boolean) => {
      if (isValid) {
        allMovies[selectedMovieIndex].description = description;
        allMovies[selectedMovieIndex].name = name;
        allMovies[selectedMovieIndex].image = image;
        allMovies[selectedMovieIndex].price = price;
        console.log("Edited !");
        res.send(JSON.stringify(allMovies[selectedMovieIndex]));
        requestCloserService(res);
        return;
      } else {
        res.status(400).send("Bad Request :( !");
        requestCloserService(res);
        return;
      }
    });
  } else {
    res.status(404).send("SELECTED MOVIE NOT FOUND !");
    requestCloserService(res);
    return;
  }
};
