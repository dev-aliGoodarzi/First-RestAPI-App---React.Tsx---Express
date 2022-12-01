"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAllMovies = void 0;
// Models
// Data
const getAllMovieService_1 = require("./getAllMovieService");
// Data
// Services
const requestCloser_1 = require("./requestCloser");
// Services
const sendAllMovies = (req, res) => {
    const movies = (0, getAllMovieService_1.getAllMovieService)();
    res.write(JSON.stringify(movies));
    (0, requestCloser_1.requestCloser)(res);
};
exports.sendAllMovies = sendAllMovies;
