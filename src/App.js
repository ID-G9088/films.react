import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import axios from "axios";
import Films from "./Components/Films/Films";
import Loading from "./Components/Loading/Loading";

const LIMIT = 36;

class App extends Component {
    state = {
        films: [],
        isLoading: true,
    };

    componentDidMount() {
        axios("https://ajax.test-danit.com/api/swapi/films").then((response) => {
            this.updateFilms(response.data);
            this.updateLoading(false);
        });
    }

    updateLoading = (data) => {
        this.setState(() => ({ isLoading: data })); //изменение state  через функцию, 2 setState одинаковых отработают 2 раза, а не 1 как через объект
    };

    updateFilms = (data) => {
        this.setState({ films: data });
    };

    render() {
        const { films, isLoading } = this.state;

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
    }
}

export default App;
