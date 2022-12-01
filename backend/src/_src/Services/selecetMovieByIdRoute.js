"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selecetMovieByIdRoute = void 0;
const requestCloserService_1 = require("./requestCloserService");
// Models
// Services
const getAllMovieService_1 = require("./getAllMovieService");
// Services
const selecetMovieByIdRoute = (req, res) => {
    const { movieId } = req.params;
    const movies = (0, getAllMovieService_1.getAllMovieService)();
    const selectedMovieItem = movies.find((item) => item.id === Number(movieId));
    if (!!selectedMovieItem) {
        res.write(JSON.stringify(selectedMovieItem));
        (0, requestCloserService_1.requestCloserService)(res);
        return;
    }
    else {
        res.status(404).write(JSON.stringify("Not Found"));
        (0, requestCloserService_1.requestCloserService)(res);
        return;
    }
};
exports.selecetMovieByIdRoute = selecetMovieByIdRoute;
