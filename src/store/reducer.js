import { SET_USER, SET_USER_LOADING, SET_FILMS_DATA, SET_FILMS_LOADING, SET_FILM_DATA, SET_FILM_LOADING, SET_CHARACTERS_LOADING, SET_CHARACTERS_DATA, DELETE_FILM } from "./types";

const initialStore = {
  user: {
    data: null,
    isLoading: true
  },
  films: {
    data: [],
    isLoading: true,
  },
  film: {
    data: [],
    isLoading: true,
  },
  characters: {
    data: [],
    isLoading: true,
  },
};

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, user: {...state.user, data: action.payload} };
    case SET_USER_LOADING:
      return {...state, user: {...state.user, isLoading: action.payload}}
    case SET_FILMS_DATA:
      return { ...state, films: { ...state.films, data: action.payload } };
    case SET_FILMS_LOADING:
      return { ...state, films: { ...state.films, isLoading: action.payload } };
    case SET_FILM_DATA:
      return { ...state, film: { ...state.film, data: action.payload } };
    case SET_FILM_LOADING:
      return { ...state, film: { ...state.film, isLoading: action.payload } };
    case SET_CHARACTERS_DATA:
      return { ...state, characters: { ...state.characters, data: action.payload } };
    case SET_CHARACTERS_LOADING:
      return { ...state, characters: { ...state.characters, isLoading: action.payload } };
    case DELETE_FILM:
      const newFilms = state.films.data.filter(film => {
        return film.id !== action.payload
      })
      return { ...state, films: {...state.films, data: newFilms}};
  
    default:
      return state;
  }
};

export default reducer;
