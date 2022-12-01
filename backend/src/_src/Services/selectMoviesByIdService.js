"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectMoviesByIdService = void 0;
const getAllMovieService_1 = require("./getAllMovieService");
const selectMoviesByIdService = (movieId) => {
    const movies = (0, getAllMovieService_1.getAllMovieService)();
    const selectedMovieItem = movies.find((item) => item.id === Number(movieId));
    return selectedMovieItem;
};
exports.selectMoviesByIdService = selectMoviesByIdService;
