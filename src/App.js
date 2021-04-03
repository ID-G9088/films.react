import logo from "./logo.svg";
import "./App.css";
import { Component, useEffect, useState } from "react";
import axios from "axios";
import Films from "./Components/Films/Films";
import Loading from "./Components/Loading/Loading";

const LIMIT = 36;

const App = () => {
    const [films, setFilms] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios("https://ajax.test-danit.com/api/swapi/films").then((response) => {
            updateFilms(response.data);
            updateLoading(false);
        });
    }, []);

    const updateLoading = (data) => {
        setLoading(data); //изменение state  через функцию, 2 setState одинаковых отработают 2 раза, а не 1 как через объект
    };

    const updateFilms = (data) => {
        setFilms(data);
    };

    if (isLoading) {
        return <Loading />;
    }
    return (
        <div className="App">
            <ol>
                {films.map((el) => {
                    return <Films key={el.id} film={el} />;
                })}
            </ol>
        </div>
    );
};

export default App;
