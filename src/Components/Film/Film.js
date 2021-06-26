import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Characters from "../Characters/Characters";

const Film = (props) => {
  const history = useHistory();

  const { film, showDetails } = props;
  console.log(film);

  const goToDetalis = () => {
    const {
      film: { id },
    } = props;
    history.push(`/films/${id}`);
  };

  const goBack = () => {
    history.goBack();
  };

  const deleteFilm = () => {
    console.log(22);
  };

  return (
    <li>
      <span>
        {film.name} <button onClick={deleteFilm}>X</button>
      </span>
      {!showDetails && <button onClick={goToDetalis}> MORE</button>}
      {showDetails && (
        <>
          <div>{film.episodeId}</div>
          <div>{film.openingCrawl}</div>
          <Characters characters={film.characters} />
          <button onClick={goBack}>GO BACK</button>
        </>
      )}
    </li>
  );
};

Film.defaultProps = {
  showDetails: false,
};

const mapStateToProps = (state) => {
  return { films: state.films.data };
};
export default connect(mapStateToProps)(Film);
