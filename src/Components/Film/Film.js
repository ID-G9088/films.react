import React from "react";
import { useHistory } from "react-router-dom";
import Characters from "../Characters/Characters";

const Film = (props) => {
  const history = useHistory();

  const goToDetalis = () => {
    const {
      film: { id },
    } = props;
    history.push(`/films/${id}`);
  };

  const goBack = () => {
    history.goBack();
  };

  const { film, showDetails } = props;

  return (
    <li>
      <span>{film.name}</span>
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
export default Film;
