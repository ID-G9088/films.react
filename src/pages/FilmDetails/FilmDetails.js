import React from "react";
import Film from "../../components/Film/Film";
import Loading from "../../components/Loading/Loading";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getFilm, getFilms, getFilmLoading } from "../../store/selectors";
import { useDispatch } from "react-redux";
import { setFilm, setFilmLoading } from "../../store/actions";
import { getFilmData } from "../../store/operations";

const FilmDetails = () => {
  // const [film, setFilm] = useState(null)
  // const [isLoading, setLoading] = useState(true)
  const film = useSelector(getFilm);
  const films = useSelector(getFilms);
  const isLoading = useSelector(getFilmLoading);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (films.length > 0) {
      const currentFilm = films.find((el) => String(el.id) === params.filmId);
      dispatch(setFilm(currentFilm));
      dispatch(setFilmLoading(false));
    } else {
      dispatch(getFilmData(params.filmId))
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
