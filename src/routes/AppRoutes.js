import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Page404 from "../Components/Page404/Page404";
import Films from "../pages/Films/Films";
import FilmDetails from "../pages/FilmDetails/FilmDetails";
import Login from "../pages/Login/Login";
import ThemeContext from "../context/themeContext";

const AppRoutes = (props) => {
  const { films, user, setUser } = props;
  console.log(user, props.user);
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  const authenticated = !!user;

  return (
    <div style={theme}>
      <Switch>
        <Redirect exact from="/" to="/films" />
        <Route exact path="/login" render={() => <Login authenticated={authenticated} setUser={setUser} user={user} />} />
        <ProtectedRoutes authenticated={authenticated} exact path="/films" render={() => <Films films={films} />} />
        <ProtectedRoutes authenticated={authenticated} exact path="/films/:filmId" render={() => <FilmDetails films={films} />} />
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
