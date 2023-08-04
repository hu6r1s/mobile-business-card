import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Google from "assets/images/Google.svg";
import Facebook from "assets/images/Facebook.svg";
import Github from "assets/images/Github.svg";
import { Container, ButtonWrap } from "styles/style";
import { firebaseInstance, authService } from "fbase";
import Header from "../components/Header";

const Auth = () => {
  const navigate = useNavigate();
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "facebook") {
      provider = new firebaseInstance.auth.FacebookAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    try {
      await authService.signInWithPopup(provider);
      navigate("/card");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Container>
      <Header />
      <ButtonWrap>
        <img src={Google} onClick={onSocialClick} name="google" />
        <img src={Facebook} onClick={onSocialClick} name="facebook" />
        <img src={Github} onClick={onSocialClick} name="github" />
      </ButtonWrap>
    </Container>
  );
};

export default Auth;
