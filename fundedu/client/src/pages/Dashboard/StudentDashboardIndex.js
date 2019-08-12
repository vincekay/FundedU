import React from 'react';
import Header from '../../components/Navbar/Navbar';
import StudentDashboard from '../../components/Dashboard/StudentDashboard'
import Footer from '../../components/Navbar/Footer';

const StudentDashboardIndex = () => {

    return (
      <div>
        <Header type="student_index"/>
        <br/>
        <StudentDashboard />
        <Footer />
      </div>
    );
  }

export default StudentDashboardIndex;
