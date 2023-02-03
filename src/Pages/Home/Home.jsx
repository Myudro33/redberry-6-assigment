import React from "react";
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
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Container>
      <Heading>
        <Image src={redberryLogo} alt="redberry-logo" />
        <Line />
      </Heading>
      <ButtonContainer>
        <Link to={"/personal"}>
          <Button>რეზიუმეს დამატება</Button>
        </Link>
        <BackgroundImg src={backgroundLogo} alt="backgroundlogo" />
      </ButtonContainer>
    </Container>
  );
};

export default Home;
