// Mongoose
import mongoose from "mongoose";
import movieSchema from "../Schema/movieSchema";
// Mongoose
// Schemas
// Schemas

const movieModel = mongoose.model("MovieSchema_", movieSchema);

const newMovieSubmitter = async (
  name: string,
  price: number | string,
  description: string,
  tags: string[]
) => {
  const Product = new movieModel({
    name,
    price,
    description,
    tags,
  });
  const result = await Product.save().then(() => {
    console.log("selected Movie Saved !");
  });
  return result;
};

export default newMovieSubmitter;
