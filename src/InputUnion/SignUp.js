import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
import app from "./base";
import firebase from "firebase";

const SignUp = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [img, setImg] = useState("");
  const [percent, setPercent] = useState(0);

  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const onSignUp = async () => {
    const signedUser = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log(signedUser);

    await app.firestore().collection("union").doc(signedUser.uid).set({
      name: name,
      avatar: avatar,
      email: email,
      phoneNumber: phoneNumber,
      residentialAddress: residentialAddress,
      password: password,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log("you have signed up");
    setName("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
  };

  const onSignIn = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);
  };

  const signUpWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await app.auth().signInWithPopup(provider);
  };

  const uploadImage = async ({ target }) => {
    const file = target.files[0];
    setImg(URL.createObjectURL(file));

    const fileRef = await app.storage().ref();
    const storageRef = fileRef.child("avatar/" + file.name).put(file);

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
          setAvatar(URL);
          console.log("This is the URL: ", URL);
        });
      }
    );
  };

  return (
    <Container>
      {toggle ? (
        <Wrapper>
          <Create>Create an account</Create>

          <Inputs>
            <InputImage type="file" id="picture" onChange={uploadImage} />
            <Label htmlFor="picture">Upload Image</Label>
            <MyInput
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <MyInput
              type="Number"
              placeholder="Phone number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              value={phoneNumber}
            />
            <MyInput
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <MyInput
              type="text"
              placeholder="Residential Address"
              onChange={(e) => {
                setResidentialAddress(e.target.value);
              }}
              value={residentialAddress}
            />

            <MyInput
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <MyButton onClick={onSignUp}>Sign Up</MyButton>
            <Detail>
              <span>
                Already have an Account? <p onClick={onToggle}>Sign In</p>
              </span>
            </Detail>
            <Detail>
              <span>
                Or sign in with, <p onClick={signUpWithGoogle}>Google</p>
              </span>
            </Detail>
          </Inputs>
        </Wrapper>
      ) : (
        <Wrapper>
          <Create>Sign In</Create>

          <Inputs>
            <MyInput
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />

            <MyInput
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <MyButton onClick={onSignIn}>Sign In</MyButton>
            <Detail>
              <span>
                Don't have Account? <p onClick={onToggle}>Register</p>
              </span>
            </Detail>
          </Inputs>
        </Wrapper>
      )}
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  padding-top: 80px;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: #f0fbf5;
  align-items: center;
  display: flex;
`;

const Create = styled.div`
  font-size: 20px;
  font-family: sans-serif;
  color: gray;
  margin-bottom: 15px;
  font-weight: bold;
`;

const Wrapper = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  margin-bottom: 50px;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(0 0 0 / 20%) 0px 0px 30px 5px,
    rgb(0 0 0 / 5%) 0px -5px 0px 0px;
  align-items: center;
  background-color: white;
`;

const Inputs = styled.div`
  width: 500px;
  /* height: 500px; */
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MyInput = styled(Input)`
  width: 350px;
  height: 40px;
  margin: 10px 0;
`;

const AvatarInput = styled(Input)`
  width: 350px;
  margin: 10px 0;
`;

const MyButton = styled(Button)`
  width: 350px;
  height: 40px;
  margin: 10px 0;
  background-color: lightgreen;
  border-radius: 5px;
`;

const Detail = styled.div`
  width: 300px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  span {
    display: flex;
  }
  p {
    margin: 0 5px;
    font-weight: bold;
    color: blue;
    cursor: pointer;
  }
`;

const InputImage = styled.input`
  width: 300px;
  height: 40px;
  display: none;
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
  padding-right: 50%;
  cursor: pointer;
`;
