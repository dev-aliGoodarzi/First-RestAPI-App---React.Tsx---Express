"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectMoviesByIdService = void 0;
// Models
const productsModel_1 = require("../Models/productsModel");
// Models
const selectMoviesByIdService = (movieName) => {
    const selectedMovieItem = productsModel_1.movieModel.find({ name: movieName });
    return selectedMovieItem;
};
exports.selectMoviesByIdService = selectMoviesByIdService;
