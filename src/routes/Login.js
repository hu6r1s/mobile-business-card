import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Title from "../assets/images/Title.svg";
import MainImage from "../assets/images/MainImage.svg";
import Google from "../assets/images/Google.svg";
import Facebook from "../assets/images/Facebook.svg";
import Kakao from "../assets/images/Kakao.svg";
import { Container, ButtonWrap } from "../styles/style";

const Login = () => {
  return (
    <Container>
      <img src={Title} alt="메인 타이틀" />
      <br />
      <img src={MainImage} alt="메인 로고" />
      <ButtonWrap>
        <img src={Google} />
        <img src={Kakao} />
        <img src={Facebook} />
      </ButtonWrap>
    </Container>
  )
}

export default Login;