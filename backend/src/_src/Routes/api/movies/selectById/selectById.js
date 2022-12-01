"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectById = void 0;
// Express
// Services
const requestCloserService_1 = require("./../../../../Services/requestCloserService");
const selectMoviesByIdService_1 = require("./../../../../Services/selectMoviesByIdService");
// Services
const selectById = (req, res) => {
    const selectedMovieItem = (0, selectMoviesByIdService_1.selectMoviesByIdService)(req.params.movieId);
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
exports.selectById = selectById;
