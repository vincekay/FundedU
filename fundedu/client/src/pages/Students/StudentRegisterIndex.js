import React from 'react';
import Header from '../../components/Header/Header';
import StudentRegister from '../../components/Students/StudentRegister';

const StudentRegisterIndex = () => {

    return (
      <div className="container">
        <Header type="student_index"/>
        <StudentRegister />
      </div>
    );
  }

export default StudentRegisterIndex;
