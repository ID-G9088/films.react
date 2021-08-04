import axios from "axios";
import React from "react";
import Loading from "../../components/Loading/Loading";
import { useEffect } from "react";
import Film from "../../components/Film/Film";
import { connect } from "react-redux";
import { getFilmsData } from "../../store/operations";

export const Films = (props) => {
  useEffect(() => {
    if (props.films.length === 0) {
      props.getFilmsData();
    }
  }, []);

  if (props.isLoading) {
    return <Loading />;
  }

  console.log(props.films.name);
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
    getFilmsData: () => dispatch(getFilmsData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Films);
