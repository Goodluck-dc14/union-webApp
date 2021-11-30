import React from "react";
import styled from "styled-components";
import pic from "./img/2.png";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { MdSecurity } from "react-icons/md";
import { GoGraph } from "react-icons/go";
// import BuildProps from "./BuildProps";

const BuildPage = () => {
  return (
    <Container>
      <ContentHolder>
        <ImgHolder src={pic} />
        <TextHolder>
          <FirstText>Raise funds for specific campaigns</FirstText>
          <Description>
            Customize your campaign pages with a target amount, project
            description and use of funds. Pages include progress bars and donor
            lists.
          </Description>
          <BuildHold>
            <SecureHolder>
              <MdSecurity
                style={{ marginTop: "5px", color: "green", fontSize: "20px" }}
              />
              <Holding>
                <HoldingText>Secure</HoldingText>
                <HoldingDescrip>
                  Our Trust & Safety team works around the clock to protect
                  against fraud.
                </HoldingDescrip>
              </Holding>
            </SecureHolder>
            <SecureHolder>
              <GoGraph
                style={{ marginTop: "5px", color: "green", fontSize: "20px" }}
              />
              <Holding>
                <HoldingText>Social reach</HoldingText>
                <HoldingDescrip>
                  Harness the power of social media to spread your story and get
                  more support.
                </HoldingDescrip>
              </Holding>
            </SecureHolder>
          </BuildHold>
        </TextHolder>
      </ContentHolder>
    </Container>
  );
};

export default BuildPage;

const BuildHold = styled.div`
  display: flex;
  width: 200px;
  /* justify-content: center; */
  /* flex-direction: column;
   */

  /* flex-wrap: wrap; */
`;

const Holding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;
const HoldingText = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;
const HoldingDescrip = styled.div`
  width: 200px;
  font-size: 13px;

  @media screen and (max-width: 600px) {
    /* text-align: center; */
    font-size: 12px;
    width: 160px;
  }
`;
const SecureHolder = styled.div`
  display: flex;
  /* background: red; */
  margin-top: 20px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
  /* align-items: center; */
`;

const Description = styled.div`
  /* text-align: center; */
  width: 500px;
  margin-top: 10px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  margin-top: 30px;
  @media screen and (max-width: 600px) {
    margin-left: 0;
    margin-top: 0;
  }
`;
const FirstText = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const ContentHolder = styled.div`
  display: flex;
  /* width: 300px; */
  /* background-color: red; */
  width: 90%;
  justify-content: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  background: #f3f4f5;
  color: black;
  width: 100%;
  /* height: 200px; */
  display: flex;
  /* margin-top: 200px; */
  align-items: center;
  margin-top: -10px;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const ImgHolder = styled.img`
  height: 300px;
  width: 300px;
  object-fit: cover;
`;
