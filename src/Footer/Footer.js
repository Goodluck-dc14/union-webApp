import React from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

let date = new Date().getFullYear();
console.log(date);

function Footer() {
  return (
    <Container>
      <Wrapper>
        <ContentHolder>
          <AboutText>About</AboutText>
          <Text1>Our Mission</Text1>
          <Text2>Our Services</Text2>
          <Text3>Our Leadership</Text3>
          <Text4>Our Team</Text4>
        </ContentHolder>
        <ContentHolder>
          <AboutText>Contact</AboutText>
          <Text1>Our Location</Text1>
          <Text2>Address</Text2>
          <Text3>Social Media</Text3>
          <Text4>Phone Number</Text4>
        </ContentHolder>
        <ContentHolder>
          <AboutText>Feedback</AboutText>
          <Text1>Testimonies</Text1>
          <Text2>Our Source</Text2>
        </ContentHolder>
        <ContentHolder>
          <AboutText>Blog</AboutText>
        </ContentHolder>
      </Wrapper>
      <BottomTab>
        <Tab>
          <Logo src="" />
          <span>
            Developed by CodeLab 🚀 | © {date} All rights reserved 💎{" "}
          </span>
          <SocialLinks>
            <a
              // rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebookSquare style={{ color: "#00acee" }} />
            </a>

            <a
              // rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram style={{ color: "#00acee" }} />
            </a>
            <a
              // rel="noopener noreferrer"
              target="_blank"
            >
              <FaYoutube style={{ color: "red" }} />
            </a>
          </SocialLinks>
        </Tab>
      </BottomTab>
    </Container>
  );
}

export default Footer;

const Tab = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 40px;
`;

const BottomTab = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  color: silver;

  align-items: center;
  padding: 10px;

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
  /* padding: 0 15px; */
`;
const SocialLinks = styled.div`
  font-size: 35px;
  height: 100%;
  display: flex;
  align-items: center;
  width: 170px;
  justify-content: space-between;
  /* background-color: red; */

  a {
    color: white;
  }

  @media screen and (max-width: 600px) {
    font-size: 10px;
    width: 70px;
  }
`;
const Logo = styled.div`
  width: 50px;
  height: 50px;
  object-fit: contain;
  cursor: pointer;
  /* margin-left: 30px; */
  background: #76beda;
  border-radius: 50px;
  display: flex;
`;

const ContentHolder = styled.div`
  @media screen and (max-width: 600px) {
    margin: 10px;
  }
`;

const AboutText = styled.div`
  font-weight: bold;
  font-size: 15px;
  padding-bottom: 10px;

  @media screen and (max-width: 600px) {
    /* padding: 0; */

    /* background-color: red; */
  }
`;

const Text1 = styled.div``;
const Text2 = styled.div``;
const Text3 = styled.div``;
const Text4 = styled.div``;

const Container = styled.div`
  background-color: #212531;
`;

const Wrapper = styled.div`
  display: grid;
  margin: 10px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  width: 85%;
  justify-content: center;
  padding: 20px;
  color: white;
  /* background-color: red; */
  margin-left: 150px;
  /* background-color: red; */ /* align-items: center; */
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 0;
    width: 90%;
    margin-left: 10px;
    padding: 10px;
    padding-top: 10px;
    padding-bottom: 20px;
  }
`;
