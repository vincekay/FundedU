import React from 'react';
import Header from '../../components/Navbar/Navbar';
import FunderDashboard from '../../components/Dashboard/FunderDashboard';
import Footer from '../../components/Navbar/Footer';

const FunderDashboardIndex = () => {

    return (
      <div>
        <Header type="funder_index"/>
        <br/>
        <FunderDashboard />
        <Footer />
      </div>
    );
  }

export default FunderDashboardIndex;
