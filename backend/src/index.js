"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Express
const express_1 = __importDefault(require("express"));
// Express
// Services
const sendAllMoviesService_1 = require("./_src/Services/sendAllMoviesService");
const selectMovieByIdService_1 = require("./_src/Services/selectMovieByIdService");
const postNewMovieService_1 = require("./_src/Services/postNewMovieService");
// Services
// initialize The Express
const app = (0, express_1.default)();
// initialize The Express
// Setting Up Middlewares
// ****** for support json Format !
app.use(express_1.default.json());
// ****** for support json Format !
// Setting Up Middlewares
// ******************************* Routes
// Get
app.get("/api/movies", (req, res) => {
    (0, sendAllMoviesService_1.sendAllMovies)(req, res);
});
app.get("/api/movies/:movieId", (req, res) => {
    (0, selectMovieByIdService_1.selectMovieByIdService)(req, res);
});
// Post
app.post("/api/movies/new", (req, res) => {
    (0, postNewMovieService_1.postNewMovieService)(req, res);
});
// Put
// Delete
// ******************************* Routes
const port = process.env.customPort || 3100;
app.listen(Number(port), () => {
    console.log(`Server Is Running On Port ${port}`);
});
