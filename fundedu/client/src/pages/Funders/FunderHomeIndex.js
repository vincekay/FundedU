import React from 'react';
import Header from '../../components/Header/Header';
import FunderHome from '../../components/Funders/FunderHome';

const FunderHomeIndex = () => {

    return (
      <div className="container">
        <Header type="funder_index"/>
        <FunderHome />
      </div>
    );
  }

export default FunderHomeIndex;
