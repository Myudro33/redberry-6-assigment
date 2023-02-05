import React,{useState}from "react";
import * as styled from "./ExperienceStyled";
import Resume from "../../Components/Resume";
import ExperienceForm from "./ExperienceForm";
const Experience = () => {
  return (
    <styled.Container>
      <ExperienceForm />
      <Resume />
    </styled.Container>
  );
};

export default Experience;
