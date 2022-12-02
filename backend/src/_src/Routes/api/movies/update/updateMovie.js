"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMovie = void 0;
const requestCloserService_1 = require("./../../../../Services/requestCloserService");
const getAllMovieService_1 = require("./../../../../Services/getAllMovieService");
const _validationSchema_1 = require("./../../../../Schema/_validationSchema");
// Express
// Services
// Services
const updateMovie = (req, res) => {
    const { movieId } = req.params;
    const validationSchema = (0, _validationSchema_1._validationSchema)();
    const allMovies = (0, getAllMovieService_1.getAllMovieService)();
    const selectedMovieIndex = allMovies.findIndex((item) => item.id === Number(movieId));
    console.log(selectedMovieIndex);
    const { name, description, image, price } = req.body;
    if (selectedMovieIndex > -1) {
        validationSchema.isValid(req.body).then((isValid) => {
            if (isValid) {
                allMovies[selectedMovieIndex].description = description;
                allMovies[selectedMovieIndex].name = name;
                allMovies[selectedMovieIndex].image = image;
                allMovies[selectedMovieIndex].price = price;
                console.log("Edited !");
                res.write("Edited Sucessfully");
                (0, requestCloserService_1.requestCloserService)(res);
                return;
            }
            else {
                res.status(400).write("Bad Request :( !");
                (0, requestCloserService_1.requestCloserService)(res);
                return;
            }
        });
    }
    else {
        res.status(404).write("SELECTED MOVIE NOT FOUND !");
        (0, requestCloserService_1.requestCloserService)(res);
        return;
    }
};
exports.updateMovie = updateMovie;
