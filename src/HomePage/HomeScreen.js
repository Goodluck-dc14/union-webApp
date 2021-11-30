import React from "react";
import Footer from "../Footer/Footer";
import HeaderNav from "../Header/HeaderNav";
import About from "./About";
import Body from "./Body";
import PastEvent from "./PastEvent";
import BuildPage from "../Gideon/BuildPage";

const HomeScreen = () => {
  return (
    <div>
      <HeaderNav />
      <Body />
      <BuildPage />
      <About />
      <PastEvent />
      <Footer />
    </div>
  );
};

export default HomeScreen;
