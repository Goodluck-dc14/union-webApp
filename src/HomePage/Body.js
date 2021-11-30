import React from "react";
import styled from "styled-components";

const Body = () => {
  return (
    <>
      <Container>
        <Left>
          <Wrapper>
            <Top>Building A Wealthy Economy</Top>
            <Text>
              What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
              printing and typesetting industry Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book it has? Obialasor
            </Text>
            <Button>Get Started</Button>
          </Wrapper>
        </Left>
        <Right src="/images/1.png" />
      </Container>
      <Mysvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,288L48,277.3C96,267,192,245,288,218.7C384,192,480,160,576,154.7C672,149,768,171,864,165.3C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        fthg
      </Mysvg>
    </>
  );
};

export default Body;

const Mysvg = styled.svg`
  position: relative;
  margin-top: -150px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  justify-content: space-around;
`;

const Top = styled.div`
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 10px;
`;

const Text = styled.div`
  font-size: 17px;
  margin-bottom: 30px;

  /* margin-top: -100px; */
`;

const Button = styled.div`
  background-color: #069f01;
  width: 300px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 5px;
  font-size: 17px;
  transition: 350ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.04);
  }
`;

const Right = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
  /* background: green; */
  margin-left: -200px;

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 40%;
    margin-left: 20%;
    margin-top: 5%;
  }
`;

const Left = styled.div`
  width: 40%;
  height: 80%;
  /* background: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Container = styled.div`
  width: 95%;
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
  padding-top: 50px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;
