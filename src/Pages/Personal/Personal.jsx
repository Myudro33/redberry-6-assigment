import React, { useContext } from "react";
import * as styled from "./PersonalStyled";
import Resume from "../../Components/Resume";
import PersonalForm from "./PersonalForm";

const Personal = () => {

  return (
    <styled.Container>
      <PersonalForm
      />
      <Resume />
    </styled.Container>
  );
};

export default Personal;
