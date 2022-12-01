import { moviesMainRoute } from "./_src/Routes/api/movies/moviesMainRoute";
// Express
import express, { Express, Request, Response } from "express";
// Express
// Services
import { newMovie } from "./_src/Routes/api/movies/new/newMovie";
import { selectById } from "./_src/Routes/api/movies/selectById/selectById";
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
  moviesMainRoute(req, res);
});
app.get("/api/movies/:movieId", (req: Request, res: Response) => {
  selectById(req, res);
});
// Post
app.post("/api/movies/new", (req: Request, res: Response) => {
  newMovie(req, res);
});
// Put
app.put("api/movies/edit/:movieId", (req: Request, res: Response) => {});
// Delete
// ******************************* Routes

const port: number | string = process.env.customPort || 3100;
app.listen(Number(port), () => {
  console.log(`Server Is Running On Port ${port}`);
});
