"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newMovie = void 0;
// Third Party Modules
// Data
const Data_1 = require("./../../../../Data/Data");
// Data
// Schemas
const _validationSchema_1 = require("./../../../../Schema/_validationSchema");
// Schemas
// Services
const requestCloserService_1 = require("./../../../../Services/requestCloserService");
// Services
const newMovie = (req, res) => {
    const { name, price, description, image, id } = req.body;
    const validationSchema = (0, _validationSchema_1._validationSchema)({
        description: true,
        image: true,
        name: true,
        price: true,
    });
    validationSchema.isValid(req.body).then((isValid) => {
        if (isValid) {
            isValid && Data_1.movies.push({ name, price, description, image, id });
            (0, requestCloserService_1.requestCloserService)(res);
            console.log("movies Pushed !");
            return;
        }
        else {
            res.status(400).write(JSON.stringify("err"));
            console.log("Err");
            (0, requestCloserService_1.requestCloserService)(res);
            return;
        }
    });
};
exports.newMovie = newMovie;
