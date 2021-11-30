import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "antd";
import img from "./avatar.jpg";
import app from "./base";
import firebase from "firebase";

const EditProfile = () => {
  const [img, setImg] = useState("");
  const [percent, setPercent] = useState(0);

  const getMyImage = async ({ target }) => {
    const file = target.files[0];
    const myImage = URL.createObjectURL(file);
    console.log("I can see you: ", myImage);
    setImg(myImage);
  };

  const uploadImage = async ({ target }) => {
    const file = target.files[0];
    setImg(URL.createObjectURL(file));

    const fileRef = await app.storage().ref();
    const storageRef = fileRef.child("img/" + file.name).put(file);

    storageRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const counter = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercent(Math.floor(counter));
        console.log(counter);
      },
      (err) => {
        console.log(err.message);
      },
      () => {
        storageRef.snapshot.ref.getDownloadURL().then((URL) => {
          setImg(URL);
          console.log("This is the URL: ", URL);
        });
      }
    );
  };

  return (
    <Container>
      <Wrapper>
        <CardHolder>
          <ImageHolder>
            <Avatar img src={setImg} />
            <Image type="file" id="picture" onChange={uploadImage} />
            <Label htmlFor="picture">Upload Image +</Label>
          </ImageHolder>
          <Inputs>
            <MyInput type="text" placeholder="Name" />
            <MyInput type="text" placeholder="Email" />
            <MyInput type="text" placeholder="Password" />
            <Button>Update</Button>
          </Inputs>
        </CardHolder>
      </Wrapper>
    </Container>
  );
};

export default EditProfile;

const Container = styled.div`
  padding-top: 80px;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ImageHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.input`
  width: 300px;
  height: 40px;
  display: none;
`;

const CardHolder = styled.div`
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

const Inputs = styled.div`
  height: 300px;
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MyInput = styled(Input)`
  width: 350px;
  height: 40px;
  margin: 10px 0;
`;

const Label = styled.label`
  width: 350px;
  height: 40px;
  background-color: transparent;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Button = styled.div`
  height: 40px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgreen;
  margin-top: 20px;
  transition: all 350ms;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid lightgreen;
  }
`;

const Avatar = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  margin-bottom: 30px;
`;
