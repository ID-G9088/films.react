import React, { useRef } from "react";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const login = useRef();
  const password = useRef();

  const setLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newLogin = login.current.value;
    const newPassword = password.current.value;
    const user = { login: newLogin, password: newPassword };

    props.setUser({
      user: user,
    });

    setLocalStorage(user);
  };

  if (props.authenticated) {
    return <Redirect to="/films/" />;
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
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
