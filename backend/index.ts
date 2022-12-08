// Express
import express, { Express, Request, Response } from "express";
// Express
// routes
import moviesRoutes from "./_src/Routes/api/movies/moviesRoute";
// routes

// initialize The Express
const app: Express = express();
// initialize The Express

// Setting Up Middlewares
// ****** for support json Format !
app.use(express.json());
// ****** for support json Format !
// Setting Up Middlewares

// ******************************* Routes
app.use("/api/movies", moviesRoutes);
// ******************************* Routes

const port: number | string = process.env.customPort || 3100;
app.listen(Number(port), () => {
  console.log(`Server Is Running On Port ${port}`);
});
