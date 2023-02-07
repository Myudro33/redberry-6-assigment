import React from "react";
import * as styled from "./ExperienceStyled";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import {
  Button,
  MoreOptionsButton,
} from "../../Components/GlobalStyledComponents";
import ExperienceFormComponent from "../../Components/ExperienceFormComponent";

const ExperienceForm = () => {
  return (
    <styled.LeftContainer>
      <Navbar title={"გამოცდილება"} page="2/3" />
      <ExperienceFormComponent />
      <MoreOptionsButton type="button">
        მეტი გამოცდილების დამატება
      </MoreOptionsButton>
      <styled.NavigationContainer>
        <Link to={"/personal"}>
          <Button width="113px">უკან</Button>
        </Link>
        <Button type="button" width="151px">
          შემდეგი
        </Button>
      </styled.NavigationContainer>
    </styled.LeftContainer>
  );
};

export default ExperienceForm;
