"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Express
const express_1 = __importDefault(require("express"));
const moviesRoute_1 = __importDefault(require("./_src/Routes/api/movies/moviesRoute"));
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
app.use("/api/movies", moviesRoute_1.default);
// ******************************* Routes
const port = process.env.customPort || 3100;
app.listen(Number(port), () => {
    console.log(`Server Is Running On Port ${port}`);
});
