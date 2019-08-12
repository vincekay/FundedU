import React from 'react';
import Header from '../../components/Header/Header';
import StudentHome from '../../components/Students/StudentHome';

const StudnetHomeIndex = () => {

    return (
      <div className="container">
        <Header type="student_index"/>
        <StudentHome />
      </div>
    );
  }

export default StudnetHomeIndex;
