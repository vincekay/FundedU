import React from 'react';
import Header from '../../../components/Navbar/Navbar';
import NotFound from '../../../components/ErrorPages/NotFound/NotFound';

const NotFoundIndex = () => {

    return (
      <div className="container">
        <Header type="home_index"/>
        <NotFound />
      </div>
    );
  }

export default NotFoundIndex;
