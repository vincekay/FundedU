import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { registerUser } from "../../actions/index";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";
import "./Register.css";

const Register = props => {
  const dispatch = useDispatch();

  const formErrors = useSelector(state => state.errors);

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    return () => {
      dispatch({
        type: "GET_ERRORS",
        payload: {}
      });
    };
  }, [dispatch]);

  const initialState = {
    name: "",
    email: "",
    password: "",
    password2: "",
    userType: ""
  };

  if (isAuthenticated) {
    props.history.push("/student/dashboard");
  }

  const [newUser, setNewUser] = useState(initialState);

  const onChange = e => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  console.log(newUser);

  const onSubmit = e => {
    e.preventDefault();
    let userForm = {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      password2: newUser.password2,
      userType: newUser.userType
    };
    dispatch(registerUser(userForm, props.history));
    if (
      userForm.name !== "" &&
      userForm.email !== "" &&
      userForm.password !== "" &&
      userForm.password2 === userForm.password
    ) {
      props.history.push("/login");
    }
    setNewUser(initialState);
  };

  return (
    <div className="container">
      <div className="row">
          <br />
          <h2>
            <b>Register</b> below
          </h2>
          <h4>
            Already have an account? <Link to="/login"> Login </Link>
          </h4>
          <br />
        <form className="col s12" onSubmit={onSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <select
                className="input-field col s12"
                value={newUser.userType}
                name="userType"
                onChange={onChange}
              >
                <option value="" disabled selected>
                  Choose your option
                </option>
                <option value="student">Student</option>
                <option value="funder">Funder</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="name"
                type="text"
                className={classnames("validate", {
                  invalid: formErrors.name
                })}
                value={newUser.name}
                onChange={onChange}
                error={formErrors.name}
                name="name"
              />
              <label for="name">Name</label>
              <div className="errormsg">{formErrors.name}</div>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="email"
                type="email"
                value={newUser.email}
                onChange={onChange}
                error={formErrors.email}
                name="email"
                className={classnames("validate", {
                  invalid: formErrors.email
                })}
              />
              <label for="email">Email</label>
              <div className="errormsg">{formErrors.email}</div>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="password"
                type="password"
                value={newUser.password}
                onChange={onChange}
                error={formErrors.password}
                name="password"
                className={classnames("validate", {
                  invalid: formErrors.password
                })}
              />
              <label for="password">Password</label>
              <div className="errormsg">{formErrors.password}</div>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="password2"
                type="password"
                value={newUser.password2}
                onChange={onChange}
                error={formErrors.password2}
                name="password2"
                className={classnames("validate", {
                  invalid: formErrors.password2
                })}
              />
              <label for="password2">Confirm password</label>
              <div className="errormsg">{formErrors.password2}</div>
            </div>
          </div>
          <input
                value="Sign-up"
                type="submit"
                className="btn"
              />
        </form>
      </div>
    </div>

  );
};

export default withRouter(Register);
