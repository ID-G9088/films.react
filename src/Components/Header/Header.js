import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { setUser } from "../../store/actions";
import { getUser } from "../../store/selectors";

const Header = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const logOut = () => {
    dispatch(setUser(null));
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (data) => dispatch(setUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
