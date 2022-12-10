import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  tags: [String],
});

export default movieSchema;
