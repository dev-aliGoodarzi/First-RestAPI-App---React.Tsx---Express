import { Response } from "express";
export const requestCloser = (res: Response) => {
  return res.end();
};
