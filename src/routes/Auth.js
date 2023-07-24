import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "assets/images/Title.svg";
import MainImage from "assets/images/MainImage.svg";
import Google from "assets/images/Google.svg";
import Facebook from "assets/images/Facebook.svg";
import Kakao from "assets/images/Kakao.svg";
import { Container, ButtonWrap } from "styles/style";
import { firebaseInstance, authService } from "fbase";

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
    }
    try {
      await authService.signInWithPopup(provider);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Container>
      <img src={Title} alt="메인 타이틀" />
      <br />
      <img src={MainImage} alt="메인 로고" />
      <ButtonWrap>
        <img src={Google} onClick={onSocialClick} name="google" />
        <img src={Kakao} onClick={onSocialClick} name="kakao" />
        <img src={Facebook} onClick={onSocialClick} name="facebook" />
      </ButtonWrap>
    </Container>
  );
};

export default Auth;
