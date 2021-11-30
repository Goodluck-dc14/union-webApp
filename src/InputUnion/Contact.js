import React from "react";
import styled from "styled-components";
import { Input } from "antd";

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Text>Contact Us</Text>
        <HolderLocation>
          <Location>
            <PermanentAddress>
              20, Tobe Okpara Crescent Phase2, Lake View Estate Amuodofin Lagos
            </PermanentAddress>
            <SecretariatAddress>
              Nnewi Building, 1-3 Creek Road, Apapa-lagos. TEL: 08033153011,
              08037151608.
            </SecretariatAddress>
          </Location>
          <Inputs>
            <MyInput type="text" placeholder="Full Name" />
            <MyInput type="text" placeholder="Email" />
            <MessageInput type="text" placeholder="Message" />
            <Button>Contact Us</Button>
          </Inputs>
        </HolderLocation>
      </Wrapper>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  padding-top: 80px;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const HolderLocation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width: 650px) {
    justify-content: center;
  }
`;

const Location = styled.div`
  height: 180px;
  width: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PermanentAddress = styled.div`
  font-size: 14px;
  width: 200px;
  font-weight: bold;
`;

const SecretariatAddress = styled.div`
  font-size: 14px;
  width: 200px;
  font-weight: bold;
  padding-top: 20px;
`;

const Inputs = styled.div`
  height: 300px;
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 650) {
    margin-top: -70px;
  }
`;

const MyInput = styled(Input)`
  width: 350px;
  height: 40px;
  margin: 10px 0;
`;

const MessageInput = styled(Input)`
  width: 350px;
  height: 100px;
  margin: 10px 0;
  border-radius: 5px;
`;

const Button = styled.div`
  height: 40px;
  width: 200px;
  background-color: lightgreen;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 350ms;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid lightgreen;
  }
`;
