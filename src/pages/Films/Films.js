import axios from "axios";
import React from "react";
import Loading from "../../components/Loading/Loading";
import { useEffect } from "react";
import { useState } from "react";
import Film from "../../components/Film/Film";
import { connect } from "react-redux";
import { setFilms, setFilmsLoading } from "../../store/actions";
import { getFilms } from "../../store/selectors";
import {getFilmsData} from '../../store/operations'

const Films = (props) => {
  useEffect(() => {
    if (props.films.length === 0) {
      props.getFilmsData()
    }
  }, []);

  if (props.isLoading) {
    return <Loading />;
  }
  return (
    <ol>
      {props.films.map((el) => {
        return <Film key={el.id} film={el} />;
      })}
    </ol>
  );
};

const mapStateToProps = (state) => {
  return {
    films: state.films.data,
    isLoading: state.films.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFilmsData: () => dispatch(getFilmsData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Films);
