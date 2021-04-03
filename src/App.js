import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { useState, useEffect } from "react";
import Loading from "./Components/Loading/Loading";
import axios from "axios";
import Header from "./Components/Header/Header";

const App = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios("https://ajax.test-danit.com/api/swapi/films").then((response) => {
      setFilms(response.data);
      setLoading(false);
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
      <Header user={user} setUser={setUser} />
      <AppRoutes user={user} setUser={setUser} films={films} />
    </div>
  );
};

export default App;
