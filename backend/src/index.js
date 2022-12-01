"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const updateMovie_1 = require("./_src/Routes/api/movies/update/updateMovie");
const moviesMainRoute_1 = require("./_src/Routes/api/movies/moviesMainRoute");
// Express
const express_1 = __importDefault(require("express"));
// Express
// Services
const newMovie_1 = require("./_src/Routes/api/movies/new/newMovie");
const selectById_1 = require("./_src/Routes/api/movies/selectById/selectById");
// Services
// initialize The Express
const app = (0, express_1.default)();
// initialize The Express
// Setting Up Middlewares
// ****** for support json Format !
app.use(express_1.default.json());
// ****** for support json Format !
// Setting Up Middlewares
// ******************************* Routes
// Get
app.get("/api/movies", (req, res) => {
    (0, moviesMainRoute_1.moviesMainRoute)(req, res);
});
app.get("/api/movies/:movieId", (req, res) => {
    (0, selectById_1.selectById)(req, res);
});
// Post
app.post("/api/movies/new", (req, res) => {
    (0, newMovie_1.newMovie)(req, res);
});
// Put
app.put("/api/movies/edit/:movieId", (req, res) => {
    (0, updateMovie_1.updateMovie)(req, res);
});
// Delete
// ******************************* Routes
const port = process.env.customPort || 3100;
app.listen(Number(port), () => {
    console.log(`Server Is Running On Port ${port}`);
});
