import React from "react";

export const Moviecard = ({ movie }) => {
  return (
    <div>
      <span>{movie.name}</span>
      <span>{movie.description}</span>
      <span>{movie.rating}</span>
      <span>{movie.date}</span>
      <img src={movie.image} alt="pic" width="200px" />
    </div>
  );
};
