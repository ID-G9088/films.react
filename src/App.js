import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { useState, useEffect } from "react";
import Loading from "./Components/Loading/Loading";
import axios from "axios";
import Header from "./Components/Header/Header";
import { connect } from "react-redux";
import { setUser } from "./store/actions";
import { logRoles } from "@testing-library/react";

const App = (props) => {
  // const [films, setFilms] = useState([]);
  // const [isLoading, setLoading] = useState(true);
  // const [user, setUser] = useState(null);

  const { user, setFilms, setFilmsLoading, setUser, films, isLoading } = props;
  console.log(props);

  useEffect(() => {
    axios("https://ajax.test-danit.com/api/swapi/films").then((response) => {
      setFilms(response.data);
      setFilmsLoading(false);
    });
    const userLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userLocalStorage) {
      setUser(userLocalStorage);
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    films: state.films.data,
    isLoading: state.films.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (data) => dispatch(setUser(data)),
    setFilmsLoading: (data) => dispatch({ type: "SET_FILMS_LOADING", payload: data }),
    setFilms: (data) => dispatch({ type: "SET_FILMS", payload: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
