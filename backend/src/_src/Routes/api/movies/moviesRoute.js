"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Models
const express_1 = __importDefault(require("express"));
const Data_1 = require("../../../Data/Data");
const _validationSchema_1 = require("../../../Schema/_validationSchema");
// Models
// Data
const getAllMovieService_1 = require("../../../Services/getAllMovieService");
// Data
// Services
const requestCloserService_1 = require("../../../Services/requestCloserService");
const selectMoviesByIdService_1 = require("../../../Services/selectMoviesByIdService");
// Services
const routes = express_1.default.Router();
routes.get("/", (req, res) => {
    const movies = (0, getAllMovieService_1.getAllMovieService)();
    res.send(JSON.stringify(movies));
    (0, requestCloserService_1.requestCloserService)(res);
});
routes.get("/:id", (req, res) => {
    const selectedMovieItem = (0, selectMoviesByIdService_1.selectMoviesByIdService)(req.params.movieId);
    if (!!selectedMovieItem) {
        res.send(JSON.stringify(selectedMovieItem));
        (0, requestCloserService_1.requestCloserService)(res);
        return;
    }
    else {
        res.status(404).send(JSON.stringify("Not Found"));
        (0, requestCloserService_1.requestCloserService)(res);
        return;
    }
});
routes.delete("/remove/:movieId", (req, res) => {
    const { movieId } = req.params;
    const selectedMovie = (0, selectMoviesByIdService_1.selectMoviesByIdService)(movieId);
    if (!!selectedMovie) {
        const selectedMovieIndex = Data_1.movies.findIndex((item) => item.id === Number(movieId));
        Data_1.movies.splice(selectedMovieIndex, selectedMovieIndex + 1);
        res
            .status(200)
            .send(`selected Item Was be in Index ${selectedMovieIndex} & removed !`);
        (0, requestCloserService_1.requestCloserService)(res);
        return;
    }
    res.status(404).send("Selected Movie Not Found !");
    (0, requestCloserService_1.requestCloserService)(res);
    return;
});
routes.post("/new", (req, res) => {
    const { name, price, description, image } = req.body;
    const validationSchema = (0, _validationSchema_1._validationSchema)();
    validationSchema.isValid(req.body).then((isValid) => {
        if (isValid) {
            const newMovie = { name, price, description, image, id: Date.now() };
            isValid && Data_1.movies.push(newMovie);
            res.send(JSON.stringify(newMovie));
            (0, requestCloserService_1.requestCloserService)(res);
            console.log("movies Pushed !");
            return;
        }
        else {
            res.status(400).send(JSON.stringify("err"));
            console.log("Err");
            (0, requestCloserService_1.requestCloserService)(res);
            return;
        }
    });
});
routes.put("/edit/:movieId", (req, res) => {
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
                res.send(JSON.stringify(allMovies[selectedMovieIndex]));
                (0, requestCloserService_1.requestCloserService)(res);
                return;
            }
            else {
                res.status(400).send("Bad Request :( !");
                (0, requestCloserService_1.requestCloserService)(res);
                return;
            }
        });
    }
    else {
        res.status(404).send("SELECTED MOVIE NOT FOUND !");
        (0, requestCloserService_1.requestCloserService)(res);
        return;
    }
});
exports.default = routes;
