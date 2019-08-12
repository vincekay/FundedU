import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { loginUser } from "../../actions/index";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";
import "./Register.css";

const Login = props => {
  const dispatch = useDispatch();

  const formErrors = useSelector(state => state.errors);

  const auth = useSelector(state => state.auth);

  useEffect(() => {
    return () => {
      dispatch({
        type: "GET_ERRORS",
        payload: {}
      });
    };
  }, [dispatch]);

  const initialState = {
    email: "",
    password: ""
  };

  if (auth.isAuthenticated) {
    props.history.push(`/${auth.user.userType}/dashboard`);
  }

  const [User, setUser] = useState(initialState);

  const onChange = e => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    let userForm = {
      email: User.email,
      password: User.password
    };
    dispatch(loginUser(userForm));
    setUser(initialState);
  };

  return (
    <div className="container">
      <div className="row">
        <br />
        <h2>
          <b>Login</b> below
        </h2>
        <h4>
          Don't have an account? <Link to="/register"> Register </Link>
        </h4>
        <br />

        <form className="col s12" onSubmit={onSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="email"
                value={User.email}
                onChange={onChange}
                error={formErrors.email}
                name="email"
                type="email"
                className={classnames("validate", {
                  invalid: formErrors.email || formErrors.emailNotFound
                })}
              />
              <label for="email">Email</label>
              <div className="errormsg">
                {formErrors.email}
                {formErrors.emailNotFound}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                id="password"
                value={User.password}
                onChange={onChange}
                error={formErrors.password}
                name="password"
                type="password"
                className={classnames("validate", {
                  invalid: formErrors.password || formErrors.passwordIncorrect
                })}
              />
              <label for="password">Password</label>
              <div className="errormsg">
                {formErrors.password}
                {formErrors.passwordIncorrect}
              </div>
            </div>
          </div>

          <br />
          <input
            value="Login"
            type="submit"
            className="btn"
            />
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);
