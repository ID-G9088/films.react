import React, { useRef } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../../store/selectors";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/actions";

const Login = (props) => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const authenticated = !!user.data;

  const login = useRef();
  const password = useRef();

  const setLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newLogin = login.current.value;
    const newPassword = password.current.value;
    const user = {
      login: newLogin,
      password: newPassword,
    };

    dispatch(setUser(user));

    setLocalStorage(user);
  };

  if (authenticated) {
    return <Redirect to="/films" />;
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            Login
            <input type="text" ref={login} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input type="password" ref={password} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
