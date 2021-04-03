import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { useState, useEffect } from "react";
import Loading from "./Components/Loading/Loading";
import axios from "axios";

const App = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://ajax.test-danit.com/api/swapi/films").then((response) => {
      setFilms(response.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <AppRoutes films={films} />
    </div>
  );
};

export default App;
