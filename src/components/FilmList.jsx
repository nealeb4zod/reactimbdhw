import React from "react";
import Film from "./Film";

const FilmList = ({ films }) => {
  let filmArray = films.map((film) => {
    return <Film url={film.url}>{film.name}</Film>;
  });

  return (
    <>
      <ul>{filmArray}</ul>
    </>
  );
};

export default FilmList;
