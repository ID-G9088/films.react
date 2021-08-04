import axios from "axios";
import { setFilm, setFilmLoading, setFilms, setFilmsLoading } from "./actions";

export const getFilmsData = () => (dispatch) => {
  axios("https://ajax.test-danit.com/api/swapi/films")
    .then((res) => {
        dispatch(setFilms(res.data));
        dispatch(setFilmsLoading(false));
      });
}

export const getFilmData = (id) => (dispatch) => {
  axios(
    `https://ajax.test-danit.com/api/swapi/films/${id}`
  ).then((res) => {
    dispatch(setFilm(res.data));
    dispatch(setFilmLoading(false));
  });
}