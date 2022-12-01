"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectMovieByIdService = void 0;
const requestCloser_1 = require("./requestCloser");
// Models
// Services
const getAllMovieService_1 = require("./getAllMovieService");
// Services
const selectMovieByIdService = (req, res) => {
    const { movieId } = req.params;
    const movies = (0, getAllMovieService_1.getAllMovieService)();
    const selectedMovieItem = movies.find((item) => item.id === Number(movieId));
    if (!!selectedMovieItem) {
        res.write(JSON.stringify(selectedMovieItem));
        (0, requestCloser_1.requestCloser)(res);
        return;
    }
    else {
        res.status(404).write(JSON.stringify("Not Found"));
        (0, requestCloser_1.requestCloser)(res);
        return;
    }
};
exports.selectMovieByIdService = selectMovieByIdService;
