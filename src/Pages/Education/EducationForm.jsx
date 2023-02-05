import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import * as styled from "../Experience/ExperienceStyled";
import {
  Button,
  MoreOptionsButton,
} from "../../Components/GlobalStyledComponents";
import { Link } from "react-router-dom";
import EducationFormComponent from "../../Components/EducationFormComponent";
import { useNavigate } from "react-router-dom";

const EducationForm = () => {
  const navigate = useNavigate()
    const [moreOptions, setmoreOptions] = useState([{validate:false,id:0}]);
    const [validate, setvalidate] = useState(false)
    const handleSubmit = () => {
      moreOptions.map((item) => {
        if (item.validate === false) {
          setvalidate(false);
        } else {
          setvalidate(true);
          navigate("/resume");
        }
      });
    };
  return (
    <styled.LeftContainer>
    <Navbar page={"3/3"} title="განათლება" />
  
      {moreOptions.map((item, index) => (
        <EducationFormComponent setmoreOptions={setmoreOptions} index={index} key={index} />
      ))}
      <MoreOptionsButton
      type="button"
        onClick={() => setmoreOptions([...moreOptions, {validate:false,id:moreOptions.length}])}
      >
        სხვა სასწავლებლის დამატება
      </MoreOptionsButton>
      <styled.NavigationContainer style={{ marginTop: "150px" }}>
        <Link to={"/experience"}>
          <Button width="113px">უკან</Button>
        </Link>
          <Button width="151px" onClick={handleSubmit} >დასრულება</Button>
      </styled.NavigationContainer>
    
  </styled.LeftContainer>
  )
}

export default EducationForm