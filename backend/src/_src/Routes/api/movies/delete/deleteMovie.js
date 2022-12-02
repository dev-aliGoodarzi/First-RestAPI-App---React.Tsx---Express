"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovie = void 0;
// Express
// Express
const requestCloserService_1 = require("./../../../../Services/requestCloserService");
const selectMoviesByIdService_1 = require("../../../../Services/selectMoviesByIdService");
const Data_1 = require("../../../../Data/Data");
// Services
const deleteMovie = (req, res) => {
    const { movieId } = req.params;
    const selectedMovie = (0, selectMoviesByIdService_1.selectMoviesByIdService)(movieId);
    if (!!selectedMovie) {
        const selectedMovieIndex = Data_1.movies.findIndex((item) => item.id === Number(movieId));
        Data_1.movies.splice(selectedMovieIndex, selectedMovieIndex + 1);
        res
            .status(200)
            .write(`selected Item Was be in Index ${selectedMovieIndex} & removed !`);
        (0, requestCloserService_1.requestCloserService)(res);
        return;
    }
    res.status(404).write("Selected Movie Not Found !");
    (0, requestCloserService_1.requestCloserService)(res);
    return;
};
exports.deleteMovie = deleteMovie;
