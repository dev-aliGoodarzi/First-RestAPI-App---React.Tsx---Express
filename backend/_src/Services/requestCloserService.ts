import { Response } from "express";
export const requestCloserService = (res: Response) => {
  return res.end();
};
