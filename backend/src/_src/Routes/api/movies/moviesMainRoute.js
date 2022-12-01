"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesMainRoute = void 0;
// Models
// Data
const getAllMovieService_1 = require("../../../Services/getAllMovieService");
// Data
// Services
const requestCloserService_1 = require("../../../Services/requestCloserService");
// Services
const moviesMainRoute = (req, res) => {
    const movies = (0, getAllMovieService_1.getAllMovieService)();
    res.write(JSON.stringify(movies));
    (0, requestCloserService_1.requestCloserService)(res);
};
exports.moviesMainRoute = moviesMainRoute;
