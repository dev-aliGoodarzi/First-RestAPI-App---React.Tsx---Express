// Express
import express, { Express, Request, Response } from "express";
// Express
// Services
import { sendAllMovies } from "./_src/Services/sendAllMoviesService";
import { selectMovieByIdService } from "./_src/Services/selectMovieByIdService";
// Services

// initialize The Express
const app: Express = express();
// initialize The Express

// Setting Up Middlewares
// ****** for support json Format !
app.use(express.json());
// ****** for support json Format !
// Setting Up Middlewares

// ******************************* Routes
// Get
app.get("/api/movies", (req: Request, res: Response) => {
  sendAllMovies(req, res);
});
app.get("/api/movies/:movieId", (req: Request, res: Response) => {
  selectMovieByIdService(req, res);
});
// Post
// Put
// Delete
// ******************************* Routes

const port: number | string = process.env.customPort || 3100;
app.listen(Number(port), () => {
  console.log(`Server Is Running On Port ${port}`);
});
