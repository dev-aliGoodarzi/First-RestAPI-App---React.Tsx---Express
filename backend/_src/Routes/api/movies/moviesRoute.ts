// Models
import express, { Response, Request, Router } from "express";
import { movies } from "../../../Data/Data";
import newMovieSubmitter from "../../../Models/productsModel";
import { _validationSchema } from "../../../Schema/_validationSchema";
// Models
// Data
import { getAllMovieService } from "../../../Services/getAllMovieService";
// Data
// Services
import { requestCloserService } from "../../../Services/requestCloserService";
import { selectMoviesByIdService } from "../../../Services/selectMoviesByIdService";
// Services

const routes: Router = express.Router();

routes.get("/", (req: Request, res: Response) => {
  const moviesSender = async () => {
    await getAllMovieService().then((movies) => {
      res.send(JSON.stringify(movies));
      requestCloserService(res);
    });
  };
  moviesSender();
  return;
});

routes.get("/:movieName", (req: Request, res: Response) => {
  selectMoviesByIdService(req.params.movieName).then((response) => {
    if (response.length !== 0) {
      res.send(JSON.stringify(response));
      console.log("movies Found And Sent To client !");
      requestCloserService(res);
      return;
    } else {
      res.status(404).write(JSON.stringify("Not Found"));
      console.log("no Movie Found !");
      requestCloserService(res);
      return;
    }
  });
});

routes.delete("/remove/:movieId", (req: Request, res: Response) => {
  const { movieId } = req.params;
  const selectedMovie = selectMoviesByIdService(movieId);

  if (!!selectedMovie) {
    const selectedMovieIndex = movies.findIndex(
      (item) => item.id === Number(movieId)
    );
    movies.splice(selectedMovieIndex, selectedMovieIndex + 1);
    res
      .status(200)
      .send(`selected Item Was be in Index ${selectedMovieIndex} & removed !`);
    requestCloserService(res);
    return;
  }
  res.status(404).send("Selected Movie Not Found !");
  requestCloserService(res);
  return;
});

routes.post("/new", (req: Request, res: Response) => {
  const { name, price, description, tags } = req.body;

  const validationSchema = _validationSchema();

  validationSchema.isValid(req.body).then((isValid: boolean) => {
    if (isValid) {
      newMovieSubmitter(name, price, description, tags).then(() => {
        res.send(JSON.stringify(`${name + price + description + tags}`));
        requestCloserService(res);
        console.log("movies Pushed !");
        return;
      });
    } else {
      res.status(400).send(JSON.stringify("err9"));
      console.log("Err");
      requestCloserService(res);
      return;
    }
  });
});

routes.put("/edit/:movieId", (req: Request, res: Response) => {
  // const { movieId } = req.params;
  // const validationSchema = _validationSchema();
  // const allMovies = getAllMovieService();
  // const selectedMovieIndex = allMovies.findIndex(
  //   (item) => item.id === Number(movieId)
  // );
  // console.log(selectedMovieIndex);
  // const { name, description, image, price } = req.body;
  // if (selectedMovieIndex > -1) {
  //   validationSchema.isValid(req.body).then((isValid: boolean) => {
  //     if (isValid) {
  //       allMovies[selectedMovieIndex].description = description;
  //       allMovies[selectedMovieIndex].name = name;
  //       allMovies[selectedMovieIndex].image = image;
  //       allMovies[selectedMovieIndex].price = price;
  //       console.log("Edited !");
  //       res.send(JSON.stringify(allMovies[selectedMovieIndex]));
  //       requestCloserService(res);
  //       return;
  //     } else {
  //       res.status(400).send("Bad Request :( !");
  //       requestCloserService(res);
  //       return;
  //     }
  //   });
  // } else {
  //   res.status(404).send("SELECTED MOVIE NOT FOUND !");
  //   requestCloserService(res);
  //   return;
  // }
});

export default routes;
