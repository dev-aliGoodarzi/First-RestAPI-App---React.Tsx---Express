// Models
import { Document } from "mongoose";
import { movieModel } from "../Models/productsModel";
import { I_Movie } from "./../Models/interface";
// Models

export const selectMoviesByIdService = async (name: string) => {
  const selectedMovieItem = await movieModel.find({
    name,
  });
  return selectedMovieItem;
};
