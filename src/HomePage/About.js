import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

const About = () => {
  return (
    <Container>
      <Left>
        <Wrapper>
          <Top>About</Top>
          <Text>
            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
            and typesetting industry Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s when an unknown printer
            took a galley of type and scrambled it to make a type specimen book
            it has? Obialasor and typesetting industry Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book it has? Obialasor it has? Obialasor and typesetting
            industry Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s when an unknown printer took a galley of type
            and scrambled it to make a type specimen book it has? Obialasor
          </Text>
          <Icons>
            <Icon1 />
            <Icon2 />
            <Icon />
            <Icon3 />
          </Icons>
        </Wrapper>
      </Left>
      <Right src="/images/1.png" />
    </Container>
  );
};

export default About;

const Icon = styled(FaTwitter)`
  transition: 350ms;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;

const Icon1 = styled(FaFacebook)`
  transition: 350ms;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;
const Icon2 = styled(FaInstagram)`
  transition: 350ms;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;
const Icon3 = styled(ImWhatsapp)`
  transition: 350ms;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
`;

const Top = styled.div`
  font-weight: bold;
  font-size: 35px;
  /* background-color: red; */
  /* width: 100%;
  text-align: center; */
`;

const Text = styled.div`
  font-size: 16px;
  @media screen and (max-width: 760px) {
    margin: 10px;
  }
  /* color: rgba(0, 0, 0, 0.5); */
  /* margin-top: -100px; */
`;

const Icons = styled.div`
  width: 250px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  font-size: 17px;
  transition: 350ms;
  font-size: 25px;
  color: black;
  @media screen and (max-width: 768px) {
    margin-left: 20px;
    margin-top: 10px;
  }
`;

const Left = styled.div`
  width: 40%;
  height: 80%;
  /* background-color: aqua; */
  /* margin-right: 50px; */
  @media screen and (max-width: 760px) {
    width: 80%;
    height: 40%;
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const Right = styled.img`
  width: 40%;
  height: 80%;
  object-fit: contain;
  /* background-color: pink; */
  /* margin-left: 50px; */

  @media screen and (max-width: 760px) {
    width: 80%;
    height: 40%;
    margin: 30px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f3f4f5;
  margin-top: -10px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
  }
`;
