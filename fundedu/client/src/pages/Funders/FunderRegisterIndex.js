import React from 'react';
import Header from '../../components/Header/Header';
import FunderRegister from '../../components/Funders/FunderRegister';

const FunderRegisterIndex = () => {

    return (
      <div className="container">
        <Header type="funder_index"/>
        <FunderRegister />
      </div>
    );
  }

export default FunderRegisterIndex;
