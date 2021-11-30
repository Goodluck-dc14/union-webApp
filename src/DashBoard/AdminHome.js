import React from "react";
import AdminDash from "./AdminDash";
import Nav from "./Nav";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminProfile from "./AdminProfile";
import PaymentPage from "./Pay/PaymentPage";

const AdminHome = () => {
  return (
    <Container>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/admin" component={AdminDash} />
          <Route path="/payment" component={PaymentPage} />
          <Route path="/profile" component={AdminProfile} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default AdminHome;

const Container = styled.div`
  display: flex;
`;
