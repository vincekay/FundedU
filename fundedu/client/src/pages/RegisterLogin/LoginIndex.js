import React from "react";
import Header from "../../components/Navbar/Navbar";
import Login from "../../components/RegisterLogin/Login";
import Footer from "../../components/Navbar/Footer";

const LoginIndex = () => {
  return (
    <div>
      <Header type="reglogin_index" />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginIndex;
