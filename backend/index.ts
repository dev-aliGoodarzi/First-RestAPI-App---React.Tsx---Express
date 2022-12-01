import { I_Movie } from "./_src/Models/interface";
import { sendAllMovies } from "./_src/Services/sendAllMoviesService";
import express, { Express, Request, Response } from "express";
import { getAllMovieService } from "./_src/Services/getAllMovieService";
import { selectMovieByIdService } from "./_src/Services/selectMovieByIdService";

const app: Express = express();

app.use(express.json());

app.get("/api/movies", (req: Request, res: Response) => {
  sendAllMovies(req, res);
});

app.get("/api/movies/:movieId", (req: Request, res: Response) => {
  selectMovieByIdService(req, res);
});

const port: number | string = process.env.customPort || 3100;
app.listen(Number(port), () => {
  console.log(`Server Is Running On Port ${port}`);
});
