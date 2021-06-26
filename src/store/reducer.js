import { SET_CHARACTERS, SET_CHARACTERS_LOADING, SET_FILM, SET_FILMS, SET_FILMS_LOADING, SET_FILM_LOADING, SET_USER } from "./types";

const initialStore = {
  user: null,
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
      return { ...state, user: action.payload };
    case SET_FILMS_LOADING:
      return { ...state, films: { ...state.films, isLoading: action.payload } };
    case SET_FILM_LOADING:
      return { ...state, film: { ...state.film, isLoading: action.payload } };
    case SET_FILMS:
      return { ...state, films: { ...state.films, data: action.payload } };
    case SET_FILM:
      return { ...state, film: { ...state.film, data: action.payload } };
    case SET_CHARACTERS:
      return { ...state, characters: { ...state.characters, data: action.payload } };
    case SET_CHARACTERS_LOADING:
      return { ...state, characters: { ...state.characters, isLoading: action.payload } };
    default:
      return state;
  }
};

export default reducer;
