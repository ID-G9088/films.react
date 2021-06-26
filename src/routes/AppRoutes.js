import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import Films from "../pages/Films/Films";
import FilmDetails from "../pages/FilmDetails/FilmDetails";
import Login from "../pages/Login/Login";
import { useSelector } from "react-redux";
import { getUser } from "../store/selectors";

const AppRoutes = () => {
  const user = useSelector(getUser);
  const authenticated = !!user.data;
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/films" />
        <Route exact path="/login" render={() => <Login />} />
        <ProtectedRoutes authenticated={authenticated} exact path="/films" component={Films} />
        <ProtectedRoutes authenticated={authenticated} exact path="/films/:filmId" component={FilmDetails} />
        <Route path="*" render={() => <div>404</div>} />
      </Switch>
    </div>
  );
};

const ProtectedRoutes = ({ authenticated, ...rest }) => {
  if (authenticated) {
    return <Route {...rest} />;
  }

  return <Redirect to="/login" />;
};

export default AppRoutes;
