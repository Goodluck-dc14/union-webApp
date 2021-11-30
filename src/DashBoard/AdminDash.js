import React from "react";
import styled from "styled-components";

const AdminDash = () => {
  return (
    <Container>
      <Top>
        <Wrapper>
          <Image src="/images/2.jpg" />
          <Content>
            Welcome, <span>Romanus</span>
          </Content>
        </Wrapper>
      </Top>
      <Bottom>
        <Header>
          Contribution for the month of <span>Aug 19th 2021</span>
        </Header>
        <Details>
          <TBP>
            <Title>Amout to be paid</Title>
            <span>$20,000</span>
          </TBP>
          <Paid>
            <Title>Amout paid</Title>
            <span>$20,000</span>
          </Paid>
          <Remainder>
            <Title>Amout Remaining</Title>
            <span>$0</span>
          </Remainder>
          <Status>
            <Title>Status</Title>
            <span>Paid</span>
          </Status>
        </Details>

        <Transaction>
          <Table>
            <div>Description</div>
            <span>Money For Buhria</span>
          </Table>
          <Holder>
            <Table>
              <div>Amount</div>
              <span>$2000</span>
            </Table>
            <Table>
              <div>Date</div>
              <span>Aug 31st 2021</span>
            </Table>
            <Table>
              <div>Grade</div>
              <span>Grade A+</span>
            </Table>
            <Table>
              <div>Status</div>
              <span>Credited</span>
            </Table>
          </Holder>
        </Transaction>
      </Bottom>
    </Container>
  );
};

export default AdminDash;

const Holder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 550px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* height: 100vh; */
  }
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  div {
    font-weight: bold;
    font-size: 16px;
    opacity: 0.5;
    margin-bottom: 10px;
    letter-spacing: 1.5px;
    @media screen and (max-width: 768px) {
      margin-bottom: 0;
      margin-right: 10px;
    }
  }
  span {
    color: green;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  }
`;

const Transaction = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  line-height: 1.3;
`;

const Status = styled.div`
  background-color: white;
  box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px,
    rgb(0 0 0 / 43%) 0px 16px 10px -10px;
  width: 200px;
  height: 150px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  transition: all 350ms;
  cursor: pointer;
  justify-content: space-between;

  span {
    /* margin-top: 50px; */
    color: green;
    font-weight: bold;
    font-size: 20px;
  }

  :hover {
    transform: scale(1.05);
  }
`;

const Remainder = styled.div`
  background-color: white;
  box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px,
    rgb(0 0 0 / 43%) 0px 16px 10px -10px;
  width: 200px;
  height: 150px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  transition: all 350ms;
  cursor: pointer;
  justify-content: space-between;

  span {
    /* margin-top: 50px; */
    color: green;
    font-weight: bold;
    font-size: 20px;
  }

  :hover {
    transform: scale(1.05);
  }
`;

const Paid = styled.div`
  background-color: white;
  box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px,
    rgb(0 0 0 / 43%) 0px 16px 10px -10px;
  width: 200px;
  height: 150px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  transition: all 350ms;
  cursor: pointer;
  justify-content: space-between;

  span {
    /* margin-top: 50px; */
    color: green;
    font-weight: bold;
    font-size: 20px;
  }

  :hover {
    transform: scale(1.05);
  }
`;

const TBP = styled.div`
  background-color: white;
  box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px,
    rgb(0 0 0 / 43%) 0px 16px 10px -10px;
  width: 200px;
  height: 150px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  transition: all 350ms;
  cursor: pointer;
  justify-content: space-between;

  span {
    /* margin-top: 50px; */
    color: green;
    font-weight: bold;
    font-size: 20px;
  }

  :hover {
    transform: scale(1.05);
  }
`;

const Details = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Header = styled.div`
  font-size: 27px;
  margin-bottom: 20px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    text-align: center;
  }
`;

const Content = styled.div`
  font-weight: bold;
  font-size: 30px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: white;
  margin: 20px;
  object-fit: cover;
`;

const Bottom = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  overflow-y: scroll;
  /* offset: initial; */
  padding-top: 150px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    overflow-y: unset;
    padding-top: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Top = styled.div`
  width: 100%;
  height: 50%;
  /* background: red; */
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  /* width: 100%; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  flex: 1;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: auto;
  }
`;
