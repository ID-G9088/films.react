import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import { useHistory, useParams, withRouter } from "react-router-dom";
import Film from "../../Components/Film/Film";
import { connect } from "react-redux";

const FilmDetails = (props) => {
  // const [film, setFilm] = useState([]);
  // const [isLoading, setLoading] = useState(true);

  const { films, film, setFilmLoading, setFilm } = props;

  const params = useParams();

  useEffect(() => {
    if (films.data.some((el) => Number(el.id) === Number(params.filmId))) {
      const film = films.data.find((el) => Number(el.id) === Number(params.filmId));
      console.log(film);
      setFilm(film);
      setFilmLoading(false);
    } else {
      axios(`https://ajax.test-danit.com/api/swapi/films/${params.filmId}`).then((response) => {
        console.log(response);
        setFilm(response.data);
        setFilmLoading(false);
      });
    }
  }, []);

  if (film.isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Film showDetails />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    films: {
      data: state.films.data,
      isLoading: state.films.isLoading,
    },
    film: {
      data: state.film.data,
      isLoading: state.film.isLoading,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilmLoading: (data) => dispatch({ type: "SET_FILM_LOADING", payload: data }),
    setFilm: (data) => dispatch({ type: "SET_FILM", payload: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails);
