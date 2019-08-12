import React from 'react';
import Header from '../../components/Header/Header';
import StudentLogin from '../../components/Students/StudentLogin';

const StudentLoginIndex = () => {

  return (
    <div className="container">
      <Header type="student_index" />
      <StudentLogin />
    </div>
  );
}

export default StudentLoginIndex;
