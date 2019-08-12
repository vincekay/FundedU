import React from 'react';
import Header from '../../components/Header/Header';
import FunderLogin from '../../components/Funders/FunderLogin';

const FunderLoginIndex = () => {

    return (
      <div className="container">
        <Header type="funder_index"/>
        <FunderLogin />
      </div>
    );
  }

export default FunderLoginIndex;
