import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { logoutUser } from "../../actions/index";
import "./Navbar.css";

const Navbar = props => {
  const dispatch = useDispatch();

  const onLogoutClick = e => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  const { auth } = useSelector(state => ({
    auth: state.auth
  }));

  
  const initialState = 'navTop'
  const [scroll, setScroll] = useState(initialState);

  const scrollBack = () => {
    window.addEventListener('scroll', () => {
      let activeClass = scroll;
      if (window.scrollY > 700) {
        activeClass = 'navScroll';
      }
      else {
        activeClass = 'navTop';
      }
      setScroll(activeClass);
    });
    return scroll;
  }

  const studentAuthLinks = (
    <div>
      <nav className="nav-wrapper #01579b light-blue darken-4 fixTop">
        <div className="container">
          <a href="/" className="brand-logo center">
            FundedU (student)
          </a>
          <ul className="right">
            <li>
              <button
                onClick={onLogoutClick}
                className="btn-small transparent waves-effect waves-light"
              >
                Logout<i className="fas fa-sign-out-alt left" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );

  const studentGuestLinks = (
    <nav className="navbar sticky-top student text-center">
      <div className="row">
        <div className="col-3 text-left my-auto">
          <Link style={{ color: "white", textDecoration: "inherit" }} to="/">
            <i className="fas fa-chevron-circle-left" /> back to Main{" "}
          </Link>
        </div>
        <div className="col-6">
          <Link
            style={{ color: "white", textDecoration: "inherit" }}
            className="navtop"
            to="/"
          >
            FundedU <h4>(student)</h4>
          </Link>
        </div>
        <div className="col-3 text-right my-auto">
          <Link to="/register" className="btn btn-outline-warning navregbtn">
            <i className="fas fa-user-plus" /> Register
          </Link>
          <Link to="/login" className="btn btn-outline-warning">
            <i className="fas fa-sign-in-alt" /> Login
          </Link>
        </div>
      </div>
    </nav>
  );

  const funderAuthLinks = (

    <div>
      <nav className="nav-wrapper #004d40 teal darken-4 fixTop">
        <div className="container">
          <a href="/" className="brand-logo center">
            FundedU (funder)
          </a>
          <ul className="right">
            <li>
              <button
                onClick={onLogoutClick}
                className="btn-small transparent waves-effect waves-light"
              >
                Logout<i className="fas fa-sign-out-alt left" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );

  const funderGuestLinks = (
    <nav className="navbar sticky-top funder text-center">
      <div className="row">
        <div className="col-3 text-left my-auto">
          <Link style={{ color: "white", textDecoration: "inherit" }} to="/">
            <i className="fas fa-chevron-circle-left" /> back to Main{" "}
          </Link>
        </div>
        <div className="col-6">
          <Link
            style={{ color: "white", textDecoration: "inherit" }}
            className="navtop"
            to="/"
          >
            FundedU <h4>(funder)</h4>
          </Link>
        </div>
        <div className="col-3 text-right my-auto">
          <Link to="/register" className="btn btn-outline-warning navregbtn">
            <i className="fas fa-user-plus" /> Register
          </Link>
          <Link to="/login" className="btn btn-outline-warning">
            <i className="fas fa-sign-in-alt" /> Login
          </Link>
        </div>
      </div>
    </nav>
  );

  const AuthLinks = (
    <div>
      <header>
        <nav className={`nav-wrapper ${scrollBack()}`}>
          <div className="container">
            <a href="#top" className="brand-logo center">
              FundedU
            </a>
            <a href="#" className="sidenav-trigger" data-target="mobile-menu">
              <i className="material-icons">menu</i>
            </a>
            <ul className="left hide-on-med-and-down">
              <li>
                <a href="#students">Students</a>
              </li>
              <li>
                <a href="#funders">Funders</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <ul className="right">
              <li>
                <button
                  onClick={onLogoutClick}
                  className="btn-small transparent waves-effect waves-light"
                >
                  Logout<i className="fas fa-sign-out-alt left" />
                </button>
              </li>
            </ul>
            <ul className="right">
              <li>
                <a
                  href={`/${auth.user.userType}/dashboard`}
                  className="btn-small transparent waves-effect waves-light"
                >
                  Dashboard<i className="fas fa-undo-alt left" />
                </a>
              </li>
            </ul>
            <ul className="sidenav grey lighten-2" id="mobile-menu">
              <li>
                <a href="#students">Students</a>
              </li>
              <li>
                <a href="#funders">Funders</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );

  const homeLinks = (
    <div>
      <header>
        <nav className={`nav-wrapper ${scrollBack()}`}>
          <div className="container">
            <a href="#top" className="brand-logo center">
              FundedU
            </a>
            <a href="#" className="sidenav-trigger" data-target="mobile-menu">
              <i className="material-icons">menu</i>
            </a>
            <ul className="left hide-on-med-and-down">
              <li>
                <a href="#students">Students</a>
              </li>
              <li>
                <a href="#funders">Funders</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <ul className="right">
              <li>
                <a
                  href="/register"
                  className="tooltipped btn-floating btn-small transparent"
                  data-position="bottom"
                  data-tooltip="Register"
                >
                  <i className="material-icons white-text">person_add</i>
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="tooltipped btn-floating btn-small transparent"
                  data-position="bottom"
                  data-tooltip="Login"
                >
                  <i className="fas fa-sign-in-alt" />
                </a>
              </li>
            </ul>
            <ul className="sidenav grey lighten-2" id="mobile-menu">
              <li>
                <a href="#students">Students</a>
              </li>
              <li>
                <a href="#funders">Funders</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );

  const regLogAuthLinks = (
    <div>
      <header>
        <nav className={`nav-wrapper ${scrollBack()}`}>
          <div className="container">
            <a href="/" className="brand-logo center">
              FundedU
            </a>
            <ul className="right">
              <li>
                <button
                  onClick={onLogoutClick}
                  className="btn-small transparent waves-effect waves-light"
                >
                  Logout<i className="fas fa-sign-out-alt left" />
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
  const regLogGuestLinks = (
    <div>
      <header>
        <nav className={`nav-wrapper ${scrollBack()}`}>
          <div className="container">
            <a href="/" className="brand-logo center">
              FundedU
            </a>
            <ul className="right">
              <li>
                <a
                  href="/register"
                  className="tooltipped btn-floating btn-small transparent"
                  data-position="bottom"
                  data-tooltip="Register"
                >
                  <i className="material-icons white-text">person_add</i>
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="tooltipped btn-floating btn-small transparent"
                  data-position="bottom"
                  data-tooltip="Login"
                >
                  <i className="fas fa-sign-in-alt" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );

  const renderLinks = () => {
    const { type } = props;
    if (type === "home_index") {
      return auth.isAuthenticated ? AuthLinks : homeLinks;
    } else if (type === "reglogin_index") {
      return auth.isAuthenticated ? regLogAuthLinks : regLogGuestLinks;
    } else if (type === "student_index") {
      return auth.isAuthenticated ? studentAuthLinks : studentGuestLinks;
    } else if (type === "funder_index") {
      return auth.isAuthenticated ? funderAuthLinks : funderGuestLinks;
    }
  };


  return <div>{renderLinks()}</div>;
};

export default withRouter(Navbar);
