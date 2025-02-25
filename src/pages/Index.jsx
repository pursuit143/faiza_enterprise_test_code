import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
const Index = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <NewsLetter/>
      <Footer/>
    </div>
  );
};

export default Index;
