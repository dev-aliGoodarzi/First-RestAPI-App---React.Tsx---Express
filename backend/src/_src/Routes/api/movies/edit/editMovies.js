"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editMovieById = void 0;
// Express
// Schemas
const _validationSchema_1 = require("./../../../../Schema/_validationSchema");
// Schemas
// Services
const requestCloserService_1 = require("./../../../../Services/requestCloserService");
// Services
const editMovieById = (req, res) => {
    const validationSchema = (0, _validationSchema_1._validationSchema)();
    const { name, id, description, price, image } = req.body;
    validationSchema.isValid(req.body).then((isValid) => {
        if (isValid) {
            (0, requestCloserService_1.requestCloserService)(res);
            return;
        }
        else {
            (0, requestCloserService_1.requestCloserService)(res);
            return;
        }
    });
};
exports.editMovieById = editMovieById;
