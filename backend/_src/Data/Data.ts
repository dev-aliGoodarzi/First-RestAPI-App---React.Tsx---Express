import { Stream } from "stream";
import { blob } from "stream/consumers";
import { img1 } from "../images";
import { I_Movie } from "./../Models/interface";
export const movies: I_Movie[] = [
  {
    id: 1,
    description: "lorem some Dummy Text",
    image: "../images/img.png",
    name: "Where The Crowdeds Sing !",
    price: 99,
  },
  {
    id: 2,
    description: "lorem some Dummy Text",
    image: "",
    name: "Joker !",
    price: 99,
  },
  {
    id: 3,
    description: "lorem some Dummy Text",
    image: "",
    name: "Made Man !",
    price: 99,
  },
  {
    id: 4,
    description: "lorem some Dummy Text",
    image: "",
    name: "Vampire Dries !",
    price: 99,
  },
  {
    id: 5,
    description: "lorem some Dummy Text",
    image: "",
    name: "Horror 1 !",
    price: 99,
  },
];
