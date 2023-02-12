import React, { useContext} from "react";
import Navbar from "../../Components/Navbar";
import * as styled from "../Experience/ExperienceStyled";
import {
  Button,
  MoreOptionsButton,
} from "../../Components/GlobalStyledComponents";
import { Link } from "react-router-dom";
import EducationFormComponent from "./EducationFormComponent";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const EducationForm = () => {
  const navigate = useNavigate();
  const { store, setEducationsInfo,submitForm } = useContext(StoreContext);
  const handleSubmit = () => {
    const ValuesNotEmpty = store.educations.every((obj)=>{
      return Object.values(obj).every(val=>val!=="")
    })
    if(ValuesNotEmpty){
      submitForm()
      navigate("/resume");
    }else{
      alert('გთხოვთ შეავსოთ ყველა ველი')
    }
  };
  return (
    <styled.LeftContainer>
      <Navbar page={"3/3"} title="განათლება" />
      {store?.educations.map((item, index) => (
        <EducationFormComponent index={index} key={index} />
      ))}
      <MoreOptionsButton type="button" onClick={() => setEducationsInfo()}>
        სხვა სასწავლებლის დამატება
      </MoreOptionsButton>
      <styled.NavigationContainer style={{ marginTop: "150px" }}>
        <Link to={"/experience"}>
          <Button width="113px">უკან</Button>
        </Link>
        <Button width="151px" onClick={handleSubmit}>
          დასრულება
        </Button>
      </styled.NavigationContainer>
    </styled.LeftContainer>
  );
};

export default EducationForm;
