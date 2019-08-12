import React from 'react';
import Header from '../../components/Header/Header';
import FunderMain from '../../components/Funders/FunderMain';
import { Redirect } from 'react-router-dom';
import { useSelector} from "react-redux";



const FunderMainIndex = () => {
  const auth = useSelector(state => state.auth);

  const renderLinks = () => {
    if (auth.isAuthenticated && auth.user.userType === 'funder'){
      return <Redirect to="/funder/dashboard" />
    }
    else if (auth.isAuthenticated && auth.user.userType === 'student'){
      return <Redirect to="/student/dashboard" />
    }
    else{
      return <FunderMain />
    }
  }
  
  return (
    <div className="container">
      <Header type="funder_index" />
      {renderLinks()}
    </div>
  );
}

export default FunderMainIndex;
