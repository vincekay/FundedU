import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import setToken from './actions/setToken';
import { logoutUser } from "./actions/index";
// import FunderPrivateRoute from "./components/private-route/FunderPrivateRoute";
// import StudentPrivateRoute from "./components/private-route/StudentPrivateRoute";
import FunderPrivateRoute from './components/private-route/FunderPrivateRoute';
import StudentPrivateRoute from './components/private-route/StudentPrivateRoute';
import StudentDashboardIndex from './pages/Dashboard/StudentDashboardIndex';
import FunderDashboardIndex from "./pages/Dashboard/FunderDashboardIndex";
import RegisterIndex from "./pages/RegisterLogin/RegisterIndex";
import LoginIndex from "./pages/RegisterLogin/LoginIndex";
import NotFoundIndex from './pages/ErrorsPage/NotFound/NotFoundIndex';
import HomeIndex from './pages/Home/HomeIndex';


const App = (props) => {

  // Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  // props.store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    props.store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeIndex} />
        <Route path="/register" component={RegisterIndex} />
        <Route path="/login" component={LoginIndex} />
        <StudentPrivateRoute path="/student/dashboard" component={StudentDashboardIndex} />
        <FunderPrivateRoute path="/funder/dashboard" component={FunderDashboardIndex} />
        <Route path="*" component={NotFoundIndex} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
