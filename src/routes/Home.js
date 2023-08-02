import React from "react";
import { Container, ButtonWrap } from "../styles/style";
import Title from "../assets/images/Title.svg";
import HomeImage from "../assets/images/HomeImage.svg";
import LoginBar from "../assets/images/LoginBar.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <img src={Title} />
        <br />
        <img src={HomeImage} />
        <ButtonWrap>
          <img src={LoginBar} onClick={() => navigate("/login")} />
        </ButtonWrap>
      </Container>
    </>
  );
};

export default Home;
