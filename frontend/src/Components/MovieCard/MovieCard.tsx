// React
import React from "react";
import { I_Movie } from "../../Models/interfaces";
// React

type MovieCardProps = {
  data: I_Movie;
};
const MovieCard: React.FunctionComponent<MovieCardProps> = ({
  data: { description, name, price },
}) => {
  return (
    <div className="w-1/5 h-max flex-col items-center justify-center text-center py-3 px-2 bg-slate-200 rounded-lg my-4 mx-2 transition-all hover:scale-105">
      <img alt="t" className="w-32 h-32" /* add src when DONE !*/ />
      <p className="text-center">{name}</p>
      <p className="text-center">{description}</p>
      <p className="text-center">{price}$</p>
    </div>
  );
};

export default MovieCard;
