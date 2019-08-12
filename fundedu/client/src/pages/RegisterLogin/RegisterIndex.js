import React from "react";
import Header from "../../components/Navbar/Navbar";
import Register from "../../components/RegisterLogin/Register";
import Footer from "../../components/Navbar/Footer";

const RegisterIndex = () => {
  return (
    <div>
      <Header type="reglogin_index" />
      <Register />
      <Footer />
    </div>
  );
};

export default RegisterIndex;
