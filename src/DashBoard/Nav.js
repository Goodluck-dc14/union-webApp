import React from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { MdPayment } from "react-icons/md";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Container>
        <Top>
          <Logo />
          <CgProfile
            style={{
              fontSize: "17px",
            }}
          />
        </Top>
        <Mid>
          <Avatar src="/images/3.jpg" />
          <UserName>Romanus Obialasor</UserName>
          <Email>robialasor@gmail.com</Email>
        </Mid>
        <Bottom>
          <MyLink to="/admin">
            <Holder>
              <Icon />
              <span>Home</span>
            </Holder>
          </MyLink>
          <MyLink to="/payment">
            <Holder>
              <Icon1 />
              <span>Payment</span>
            </Holder>
          </MyLink>
          <MyLink to="/profile">
            <Holder>
              <Icon2 />
              <span>Profile</span>
            </Holder>
          </MyLink>
          <MyLink
            style={{
              background: "rgba(252, 252, 252, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Holder>
              <span
                style={{
                  marginRight: "10px",
                }}
              >
                Log Out
              </span>
              <Icon2 />
            </Holder>
          </MyLink>
        </Bottom>
      </Container>
      <Menu />
    </>
  );
};

export default Nav;

const Menu = styled(AiOutlineMenu)`
  display: none;
  /* position: fixed; */
  margin-top: 20px;
  margin-left: 20px;

  font-size: 30px;
  /* @media screen and (max-width: 768px) {
    display: block;
  } */
`;

const MyLink = styled(Link)`
  width: 90%;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: 350ms;
  :hover {
    background-color: rgba(252, 252, 252, 0.5);
  }
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
  color: white;
  /* background-color: green; */

  span {
    margin-left: 10px;
    font-weight: 500;
  }
`;

const Icon = styled(AiOutlineHome)`
  font-size: 25px;
`;
const Icon1 = styled(MdPayment)`
  font-size: 25px;
`;
const Icon2 = styled(CgProfile)`
  font-size: 25px;
`;

const Email = styled.div`
  opacity: 0.5;
`;

const UserName = styled.div`
  font-size: 16px;
  /* font-weight: bold; */
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  /* background-color: red; */
  margin-bottom: 20px;
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: white;
`;

const Bottom = styled.div`
  /* background-color: red; */
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: center; */
`;

const Mid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;

const Container = styled.div`
  width: 300px;
  height: 100vh;
  background: #0f172a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
