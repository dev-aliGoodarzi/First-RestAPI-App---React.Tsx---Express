"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectMovieByIdRoute = void 0;
const requestCloserService_1 = require("./requestCloserService");
const selectMoviesByIdService_1 = require("./selectMoviesByIdService");
// Services
const selectMovieByIdRoute = (req, res) => {
    const { movieId } = req.params;
    const selectedMovieItem = (0, selectMoviesByIdService_1.selectMovieByIdService)();
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
exports.selectMovieByIdRoute = selectMovieByIdRoute;
