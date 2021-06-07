import React from "react";

import { Moviecard } from "../Moviecard/Moviecard";

export const Movielist = ({ Moviedata }) => {
  return (
    <div>
      {Moviedata.map((movie) => (
        <Moviecard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
