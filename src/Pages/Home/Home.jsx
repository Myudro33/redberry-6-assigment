import React, { useContext } from "react";
import {
  Container,
  Heading,
  Image,
  Line,
  ButtonContainer,
  Button,
  BackgroundImg,
} from "./HomeStyled";
import redberryLogo from "../../assets/redberry-logo.png";
import backgroundLogo from "../../assets/background-logo.png";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
const Home = () => {
  const navigate = useNavigate();
  const { clearLocalStorage } = useContext(StoreContext);
  const handleNavigate = () => {
    clearLocalStorage();
    navigate("/personal");
  };
  return (
    <Container>
      <Heading>
        <Image src={redberryLogo} alt="redberry-logo" />
        <Line />
      </Heading>
      <ButtonContainer>
        <Button onClick={() => handleNavigate()}>რეზიუმეს დამატება</Button>
        <BackgroundImg src={backgroundLogo} alt="backgroundlogo" />
      </ButtonContainer>
    </Container>
  );
};

export default Home;
