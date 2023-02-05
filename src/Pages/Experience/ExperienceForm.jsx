import React, { useState } from "react";
import * as styled from "./ExperienceStyled";
import Navbar from "../../Components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  Button,
  MoreOptionsButton,
} from "../../Components/GlobalStyledComponents";
import ExperienceFormComponent from "../../Components/ExperienceFormComponent";
const ExperienceForm = () => {
  const navigate = useNavigate();
  const [moreOptions, setmoreOptions] = useState([{ validate: false, id: 0 }]);
  const [validate, setvalidate] = useState(false);

  const handleSubmit = () => {
    moreOptions.map((item) => {
      if (item.validate === false) {
        setvalidate(false);
      } else {
        setvalidate(true);
        navigate("/education");
      }
    });
  };
  return (
    <styled.LeftContainer>
      <Navbar title={"გამოცდილება"} page="2/3" />
      {moreOptions.map((item, index) => (
        <ExperienceFormComponent
          key={index}
          setmoreOptions={setmoreOptions}
          moreOptions={moreOptions}
          index={index}
        />
      ))}
        <MoreOptionsButton
          type="button"
          onClick={() =>
            setmoreOptions([
              ...moreOptions,
              { validate: false, id: moreOptions.length },
            ])
          }
        >
          მეტი გამოცდილების დამატება
        </MoreOptionsButton>
      <styled.NavigationContainer>
        <Button width="113px">უკან</Button>
        <Button type="button" onClick={handleSubmit} width="151px">
          შემდეგი
        </Button>
      </styled.NavigationContainer>
    </styled.LeftContainer>
  );
};

export default ExperienceForm;
