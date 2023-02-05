import React, { useContext } from "react";
import * as styled from "../Experience/ExperienceStyled";
import Resume from "../../Components/Resume";
import EducationForm from "./EducationForm";

const Education = () => {
  return (
    <styled.Container>
      <EducationForm/>
      <Resume/>
    </styled.Container>
  );
};

export default Education;
