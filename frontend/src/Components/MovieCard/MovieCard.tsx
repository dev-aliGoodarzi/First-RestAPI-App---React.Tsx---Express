// React
import React from "react";
import { I_Movie } from "../../Models/interfaces";
// React

type MovieCardProps = {
  data: I_Movie;
};
const MovieCard: React.FunctionComponent<MovieCardProps> = ({
  data: { description, id, image, name, price },
}) => {
  return (
    <div className="w-1/4 h-max flex-col items-center justify-center text-center py-3 px-2">
      <img src={image} alt="t" className="w-32 h-32" />
      <p className="text-center">{name}</p>
      <p className="text-center">{description}</p>
      <p className="text-center">{price}$</p>
    </div>
  );
};

export default MovieCard;
