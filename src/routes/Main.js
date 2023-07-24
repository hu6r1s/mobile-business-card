import React from 'react';
import { Container, ButtonWrap } from "../styles/style";
import Title from "../assets/images/Title.svg";
import MainImage from "../assets/images/MainImage.svg";
import LoginBar from "../assets/images/LoginBar.svg";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <img src={Title} />
        <br />
        <img src={MainImage} />
        <ButtonWrap>
          <img src={LoginBar} onClick={() => navigate("/login")} />
        </ButtonWrap>
      </Container>
    </>
  );
};

export default Main;