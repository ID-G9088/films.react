import { SET_USER, SET_USER_LOADING, SET_FILMS_DATA, SET_FILMS_LOADING, SET_FILM_DATA, SET_FILM_LOADING, SET_CHARACTERS_LOADING, SET_CHARACTERS_DATA } from "./types";

export const setUser = (data) => {
  return { type: SET_USER, payload: data };
};

export const setUserLoading = (data) => {
  return { type: SET_USER_LOADING, payload: data };
};

export const setFilms = (data) => {
  return { type: SET_FILMS_DATA, payload: data };
};

export const setFilmsLoading = (data) => {
  return { type: SET_FILMS_LOADING, payload: data };
};

export const setFilm = (data) => {
  return { type: SET_FILM_DATA, payload: data };
}

export const setFilmLoading = (data) => {
  return { type: SET_FILM_LOADING, payload: data };
}

export const setCharactersLoading = (data) => {
  return { type: SET_CHARACTERS_LOADING, payload: data };
}

export const setCharactersData = (data) => {
  return { type: SET_CHARACTERS_DATA, payload: data };
}
