console.clear();
// Express
import express, { Express, Request, Response } from "express";
// Express
//  Mongoose
import mongoose from "mongoose";
//  Mongoose
// Models
// Models
// routes
import moviesRoutes from "./_src/Routes/api/movies/moviesRoute";
// routes

// connect To MongoDB
mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/myDB").then(() => {
  console.log("successfully Connected TO DB");
});
// connect To MongoDB

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
