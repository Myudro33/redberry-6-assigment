import React, { useContext } from "react";
import * as styled from "./PersonalStyled";
import Resume from "../../Components/Resume";
import PersonalForm from "./PersonalForm";
import { StoreContext } from "../../Context/StoreContext";

const Personal = () => {
  const { personalInfo, setpersonalInfo } = useContext(StoreContext);
  return (
    <styled.Container>
      <PersonalForm
        personalInfo={personalInfo}
        setpersonalInfo={setpersonalInfo}
      />
      <Resume />
    </styled.Container>
  );
};

export default Personal;
