"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postNewMovieService = void 0;
const requestCloser_1 = require("./requestCloser");
// Express
// Third Party Modules
const yup = __importStar(require("yup"));
// Third Party Modules
// Data
const Data_1 = require("../Data/Data");
// Data
const postNewMovieService = (req, res) => {
    const { name, price, description, image, id } = req.body;
    const validationSchema = yup.object({
        id: yup.number().min(1).required(),
        name: yup.string().min(3).required(),
        description: yup.string().min(5).required(),
        price: yup.number().min(1).required(),
        image: yup.string().optional(),
    });
    validationSchema.isValid(req.body).then((isValid) => {
        if (isValid) {
            isValid && Data_1.movies.push({ name, price, description, image, id });
            (0, requestCloser_1.requestCloser)(res);
            console.log("movies Pushed !");
            return;
        }
        else {
            res.status(400).write(JSON.stringify("err"));
            console.log("Err");
            (0, requestCloser_1.requestCloser)(res);
            return;
        }
    });
};
exports.postNewMovieService = postNewMovieService;
