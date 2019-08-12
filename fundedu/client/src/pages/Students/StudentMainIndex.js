import React from 'react';
import Header from '../../components/Header/Header';
import StudentMain from '../../components/Students/StudentMain';
import { Redirect } from 'react-router-dom';
import { useSelector} from "react-redux";


const StudentMainIndex = () => {
  const auth = useSelector(state => state.auth);

  const renderLinks = () => {
    if (auth.isAuthenticated && auth.user.userType === 'student'){
      return <Redirect to="/student/dashboard" />
    }
    else if (auth.isAuthenticated && auth.user.userType === 'funder'){
      return <Redirect to="/funder/dashboard" />
    }
    else{
      return <StudentMain />
    }
  }


  return (
    <div className="container">
      <Header type="student_index" />
      {renderLinks()}
    </div>
  );
}

export default StudentMainIndex;
