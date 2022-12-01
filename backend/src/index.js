"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sendAllMoviesService_1 = require("./_src/Services/sendAllMoviesService");
const express_1 = __importDefault(require("express"));
const selectMovieByIdService_1 = require("./_src/Services/selectMovieByIdService");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/api/movies", (req, res) => {
    (0, sendAllMoviesService_1.sendAllMovies)(req, res);
});
app.get("/api/movies/:movieId", (req, res) => {
    (0, selectMovieByIdService_1.selectMovieByIdService)(req, res);
});
const port = process.env.customPort || 3100;
app.listen(Number(port), () => {
    console.log(`Server Is Running On Port ${port}`);
});
