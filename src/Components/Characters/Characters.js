import axios from "axios";
import React, { Component } from "react";
import Loading from "../Loading/Loading";

export default class Characters extends Component {
    state = {
        isLoading: true,
        charactersList: [],
    };

    componentDidMount() {
        const { characters } = this.props;
        const request = characters.map((el) => axios(el));
        Promise.all(request).then((res) => {
            const newArray = res.map((item) => item.data);
            this.setState({ charactersList: newArray, isLoading: false });
        }); //axios  выполнится когда все промисы загрузятся :)
    }

    render() {
        const { isLoading, charactersList } = this.state;
        const { characters } = this.props;
        // console.log({ characters });

        if (isLoading) {
            return <Loading />;
        }

        return (
            <div>
                CHARACTERS:
                {charactersList.map((el) => {
                    return <div key={el.id}>{el.name}</div>;
                })}
            </div>
        );
    }
}

//characters  -персонажи, которые повяляются при нажатии кнопку деальнее..все персонажи это аякс запросы
