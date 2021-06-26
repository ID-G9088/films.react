import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Page404 from "../Components/Page404/Page404";
import Films from "../pages/Films/Films";
import FilmDetails from "../pages/FilmDetails/FilmDetails";
import Login from "../pages/Login/Login";
import { useSelector } from "react-redux";
import { getUser } from "../store/selectors";

const AppRoutes = (props) => {
  const user = useSelector(getUser);

  const authenticated = !!user;

  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/films" />
        <Route exact path="/login" render={() => <Login />} />
        <ProtectedRoutes authenticated={authenticated} exact path="/films" render={() => <Films />} />
        <ProtectedRoutes authenticated={authenticated} exact path="/films/:filmId" render={() => <FilmDetails />} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
};

const ProtectedRoutes = ({ authenticated, ...rest }) => {
  if (authenticated) {
    return <Route {...rest} />;
  } else {
    return <Redirect to="/login/" />;
  }
};

export default AppRoutes;
