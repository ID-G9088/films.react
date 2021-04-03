import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const Characters = (props) => {
  const [charactersList, setCharactersList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const { characters } = props;

  useEffect(() => {
    const request = characters.map((el) => axios(el));
    Promise.all(request).then((res) => {
      console.log(res);
      const newArray = res.map((item) => item.data);
      setCharactersList(newArray);
      setLoading(false);
    });
  }, []);

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
