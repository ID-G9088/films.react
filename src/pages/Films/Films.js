import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import Film from "../../Components/Film/Film";
import Loading from "../../Components/Loading/Loading";
import "./Films.scss";

const Films = (props) => {
  const { films } = props;

  return (
    <ol>
      {films.map((el) => {
        return <Film key={el.id} film={el} />;
      })}
    </ol>
  );
};

export default Films;
