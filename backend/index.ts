import { updateMovie } from "./_src/Routes/api/movies/update/updateMovie";
import { moviesMainRoute } from "./_src/Routes/api/movies/moviesMainRoute";
// Express
import express, { Express, Request, Response } from "express";
// Express
// Services
import { newMovie } from "./_src/Routes/api/movies/new/newMovie";
import { selectById } from "./_src/Routes/api/movies/selectById/selectById";
import { deleteMovie } from "./_src/Routes/api/movies/delete/deleteMovie";
import routes from "./_src/Routes/api/movies/moviesRoute";
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
app.use("/api/movies", routes);
// ******************************* Routes

const port: number | string = process.env.customPort || 3100;
app.listen(Number(port), () => {
  console.log(`Server Is Running On Port ${port}`);
});
