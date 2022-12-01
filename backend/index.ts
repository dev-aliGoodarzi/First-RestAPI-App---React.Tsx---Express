import express, { Express, Request, Response } from "express";

const app: Express = express();

app.use(express.json());

const port: number | string = process.env.customPort || 3100;
app.listen(Number(port), () => {
  console.log(`Server Is Running On Port ${port}`);
});
