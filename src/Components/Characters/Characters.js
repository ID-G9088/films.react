import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import Loading from "../Loading/Loading";

const Characters = (props) => {
  // const [charactersList, setCharactersList] = useState([]);
  // const [isLoading, setLoading] = useState(true);

  const { characters, charactersList, isLoading, setCharactersList, setCharactersListLoading } = props;
  console.log(charactersList);

  useEffect(() => {
    const request = characters.map((el) => axios(el));
    Promise.all(request).then((res) => {
      console.log(res);
      const newArray = res.map((item) => item.data);
      setCharactersList(newArray);
      setCharactersListLoading(false);
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

const mapDispatchToProps = (dispatch) => {
  return {
    setCharactersList: (data) => dispatch({ type: "SET_CHARACTERS", payload: data }),
    setCharactersListLoading: (data) => dispatch({ type: "SET_CHARACTERS_LOADING", payload: data }),
  };
};

const mapStateToProps = (state) => {
  return {
    charactersList: state.characters.data,
    isLoading: state.characters.isLoading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
