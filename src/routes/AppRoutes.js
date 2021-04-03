import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Page404 from "../Components/Page404/Page404";
import Films from "../pages/Films/Films";
import FilmDetails from "../pages/FilmDetails/FilmDetails";

const AppRoutes = (props) => {
  const { films } = props;

  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/films" />
        <Route exact path="/films" render={() => <Films films={films} />} />
        <Route exact path="/films/:filmId" render={() => <FilmDetails films={films} />} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
};

export default AppRoutes;
