"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Mongoose
const mongoose_1 = __importDefault(require("mongoose"));
const movieSchema_1 = __importDefault(require("../Schema/movieSchema"));
// Mongoose
// Schemas
// Schemas
const movieModel = mongoose_1.default.model("MovieSchema_", movieSchema_1.default);
const newMovieSubmitter = (name, price, description, tags) => __awaiter(void 0, void 0, void 0, function* () {
    const Product = new movieModel({
        name,
        price,
        description,
        tags,
    });
    const result = yield Product.save().then(() => {
        console.log("selected Movie Saved !");
    });
    return result;
});
exports.default = newMovieSubmitter;
