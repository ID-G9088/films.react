import React, { Component, useState } from "react";
import Characters from "../Characters/Characters";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_FILM } from "../../store/types";

const Film = (props) => {
  const history = useHistory();
  const films = useSelector((state) => state.films.data);
  const dispatch = useDispatch();

  const goToDetails = () => {
    const {
      film: { id },
    } = props;
    history.push(`/films/${id}`);
  };

  const goBack = () => {
    history.goBack();
  };

  const deleteFilm = (id) => {
    dispatch({ type: DELETE_FILM, payload: id });
  };

  const { film, showDetails } = props;
  return (
    <li>
      <span>{film.name}</span>
      {!showDetails && <button onClick={goToDetails}>Details</button>}
      {showDetails && (
        <>
          <button onClick={goBack}>Go back</button>
          <div>{film.episodeId}</div>
          <div>{film.openingCrawl}</div>
          <Characters characters={film.characters} />
        </>
      )}
      <button onClick={deleteFilm.bind(null, film.id)} style={{ marginLeft: "5px" }}>
        X
      </button>
    </li>
  );
};

Film.defaultProps = {
  showDetails: false,
};
export default Film;
