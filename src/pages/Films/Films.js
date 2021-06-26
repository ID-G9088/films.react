import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import Film from "../../Components/Film/Film";
import Loading from "../../Components/Loading/Loading";
import "./Films.scss";

const Films = (props) => {
  const { films } = props;
  console.log(films);

  return (
    <ol>
      {films.map((el) => {
        console.log(el);
        return <Film key={el.id} film={el} />;
      })}
    </ol>
  );
};

const mapStateToProps = (state) => {
  return {
    films: state.films.data,
  };
};

export default connect(mapStateToProps)(Films);
