import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import { connect } from "react-redux";
import { setUser, setUserLoading } from "./store/actions";

const App = (props) => {
  const logOut = () => {
    props.setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userLocalStorage) {
      props.setUser(userLocalStorage);
    }
    props.setUserLoading(false)
  }, []);

  const { user, userLoading } = props;


  if (userLoading) {
    return 'Loading...'
  }

  return (
    <div className="App">
      <AppRoutes />
      {user && <button onClick={logOut}>Log out</button>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.data,
    userLoading: state.user.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (data) => dispatch(setUser(data)),
    setUserLoading: (data) => dispatch(setUserLoading(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
