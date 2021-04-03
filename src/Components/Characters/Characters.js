import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import Loading from "../Loading/Loading";

//characters  -персонажи, которые повяляются при нажатии кнопку деальнее..все персонажи это аякс запросы

const Characters = (props) => {
    const [charactersList, setCharactersList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const { characters } = props;

    useEffect(() => {
        const request = characters.map((el) => axios(el));
        Promise.all(request).then((res) => {
            const newArray = res.map((item) => item.data);
            setCharactersList(newArray);
            setLoading(false);
        }); //axios  выполнится когда все промисы загрузятся :)
    }, []);

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
};

export default Characters;
