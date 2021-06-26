import axios from "axios";

const getFilms = () => (dispatch) => {
  axios("https://ajax.test-danit.com/api/swapi/films").then((response) => {
    dispatch.setFilms(response.data);
    dispatch.setFilmsLoading(false);
  });
  const userLocalStorage = JSON.parse(localStorage.getItem("user"));
  if (userLocalStorage) {
    dispatch.setUser(userLocalStorage);
  }
};

export default getFilms;
