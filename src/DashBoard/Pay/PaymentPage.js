import React from "react";
import styled from "styled-components";

import { BsFillPlusCircleFill } from "react-icons/bs";

import pic from "./img/3.png";
import pic1 from "./img/5.png";
import pic2 from "./img/4.jfif";

const PaymentPage = () => {
  return (
    <Container>
      <Wrapper>
        <FistContent>
          <PayStackBox>
            <BsFillPlusCircleFill
              style={{ fontSize: "40px", color: "green" }}
            />
            <AddingText>
              Add your Account details, perform transactions faster!
            </AddingText>
          </PayStackBox>
          <PaymentHolder>
            <PaymentHead>Payment Card</PaymentHead>
            <PaymentDesc>
              Your wallet contains uninvested funds which can be transferred to
              any of your plans
            </PaymentDesc>
            <CardHolder>
              <FirstCard src={pic1} />
              <SecondCard src={pic2} />
              <ThirdCard src={pic} />
            </CardHolder>
          </PaymentHolder>
        </FistContent>
        <SecondContent>
          <QuickText>Payment Transfer</QuickText>
          <QuickDesc>
            Transfer right from your bank account/card to your plan
          </QuickDesc>
          <InputHolder>
            <AmountText>Amount</AmountText>
            <input
              type="number"
              placeholder="Enter amount"
              style={{
                width: "100%",
                height: "40px",
                paddingLeft: "10px",
                outline: "none",
                border: "1px solid rgba(0,0,0,0.5)",
              }}
            />
          </InputHolder>
          <InputHolder>
            <AmountText>Email</AmountText>
            <input
              type="Email"
              placeholder="Enter Amount"
              style={{
                width: "100%",
                height: "40px",
                paddingLeft: "10px",
                outline: "none",
                border: "1px solid rgba(0,0,0,0.5)",
              }}
            />
          </InputHolder>
          <InputHolder>
            <AmountText>Password</AmountText>
            <input
              type="password"
              placeholder="Enter password"
              style={{
                width: "100%",
                height: "40px",
                paddingLeft: "10px",
                outline: "none",
                border: "1px solid rgba(0,0,0,0.5)",
              }}
            />
          </InputHolder>
          <button
            style={{
              marginTop: "10px",
              height: "50px",
              width: "140px",
              borderRadius: "10px",
              backgroundColor: "green",
              color: "white",
            }}
          >
            PayNow
          </button>
        </SecondContent>
      </Wrapper>
    </Container>
  );
};

export default PaymentPage;

const InputHolder = styled.div`
  margin-top: 20px;
`;
const AmountText = styled.div``;

const QuickText = styled.div`
  font-weight: bold;
`;
const QuickDesc = styled.div`
  /* font-weight: bold; */
  color: silver;
  margin-top: 10px;
`;

const PaymentHolder = styled.div`
  margin: 10px;
`;
const CardHolder = styled.div`
  margin-top: 10px;
`;
const FirstCard = styled.img`
  height: 70px;
  width: 100px;
  margin: 5px;
  object-fit: contain;
`;
const SecondCard = styled.img`
  height: 70px;
  width: 100px;
  margin: 5px;
  object-fit: contain;
`;
const ThirdCard = styled.img`
  height: 70px;
  width: 100px;
  margin: 5px;
  object-fit: contain;
`;
const PaymentHead = styled.div``;
const PaymentDesc = styled.div`
  width: 300px;
  margin-top: 10px;
`;

const AddingText = styled.div`
  width: 200px;
  color: green;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;
const FistContent = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;
const PayStackBox = styled.div`
  height: 250px;
  width: 250px;
  border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    /* display: none; */
  }
`;
const SecondContent = styled.div`
  height: 400px;
  width: 350px;
  border: 1px solid green;
  border-radius: 10px;
  display: flex;
  /* justify-content: center; */
  padding: 20px;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 300px; /* display: none; */
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  width: 100%;
`;
const Wrapper = styled.div`
  flex: 1;
  /* background: red; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
