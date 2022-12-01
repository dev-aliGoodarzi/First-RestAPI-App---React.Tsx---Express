"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMovie = void 0;
const _validationSchema_1 = require("./../../../../Schema/_validationSchema");
// Express
// Services
const selectMoviesByIdService_1 = require("../../../../Services/selectMoviesByIdService");
// Services
const updateMovie = (req, res) => {
    const { movieId } = req.params;
    const selectedMovie = (0, selectMoviesByIdService_1.selectMoviesByIdService)(movieId);
    const validationSchema = (0, _validationSchema_1._validationSchema)({
        description: false,
        image: false,
        name: false,
        price: false,
    });
};
exports.updateMovie = updateMovie;
