import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import { useHistory, useParams, withRouter } from "react-router-dom";
import Film from "../../Components/Film/Film";

const FilmDetails = (props) => {
  const [film, setFilm] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const history = useHistory();

  const { films } = props;

  const params = useParams();

  useEffect(() => {
    console.log(films.some((el) => Number(el.id) === Number(params.filmId)));
    if (films.some((el) => Number(el.id) === Number(params.filmId))) {
      const film = films.find((el) => Number(el.id) === Number(params.filmId));
      console.log(film);
      setFilm(film);
      setLoading(false);
    } else {
      axios(`https://ajax.test-danit.com/api/swapi/films/${params.filmId}`).then((response) => {
        console.log(response);
        setFilm(response.data);
        setLoading(false);
      });
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Film showDetails film={film} />
    </div>
  );
};

export default FilmDetails;
