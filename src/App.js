import React from "react";
import SignUp from "./InputUnion/SignUp";
import Contact from "./InputUnion/Contact";
import antd from "antd/dist/antd.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EditProfile from "./InputUnion/EditProfile";
import HomeScreen from "./HomePage/HomeScreen";
import AdminHome from "./DashBoard/AdminHome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/admin" component={AdminHome} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/EditProfile" component={EditProfile} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
