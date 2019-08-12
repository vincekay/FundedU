import React from 'react';
import Home from '../../components/Home/Home';
import Parallax from '../../components/Home/Parallax';
import Footer from '../../components/Navbar/Footer';
import Navbar from '../../components/Navbar/Navbar';

const HomeIndex = () => {

  return (
    <div>
      <section className="section scrollspy" id="top">
        <Navbar type="home_index" />
      </section>
      <Home />
      <br />
      <br />
      <br />
      <Parallax />
      <Footer />
    </div>
  );
}

export default HomeIndex;
