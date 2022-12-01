"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMovieService = void 0;
// Models
// Data
const Data_1 = require("./../Data/Data");
// Data
const getAllMovieService = () => {
    return Data_1.movies;
};
exports.getAllMovieService = getAllMovieService;
