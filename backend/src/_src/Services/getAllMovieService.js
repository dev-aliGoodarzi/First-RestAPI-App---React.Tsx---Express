"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMovieService = void 0;
const productsModel_1 = require("../Models/productsModel");
// Data
const getAllMovieService = () => {
    return productsModel_1.movieModel.find();
};
exports.getAllMovieService = getAllMovieService;
