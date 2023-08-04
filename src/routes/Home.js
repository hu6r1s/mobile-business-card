import React from "react";
import { Container, ButtonWrap } from "../styles/style";
import Header from "../components/Header";
import LoginBar from "../assets/images/LoginBar.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Header />
        <ButtonWrap>
          <img src={LoginBar} onClick={() => navigate("/login")} />
        </ButtonWrap>
      </Container>
    </>
  );
};

export default Home;
