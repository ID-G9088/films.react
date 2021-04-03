import React from "react";

const Header = (props) => {
  const { user, setUser } = props;

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div>
      {user && (
        <div>
          {/* user's login : {user.user.login} */}
          <button onClick={logOut}>log out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
