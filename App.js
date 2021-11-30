import React from "react";
import HomeScreen from "./HomePage/HomeScreen";
import AdminHome from "./DashBoard/AdminHome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./Goodluck/SignUp";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/admin" component={AdminHome} />
          <Route path="/register" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
