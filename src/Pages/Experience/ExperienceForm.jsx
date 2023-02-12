import React, { useContext} from "react";
import * as styled from "./ExperienceStyled";
import Navbar from "../../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  MoreOptionsButton,
} from "../../Components/GlobalStyledComponents";
import ExperienceFormComponent from "./ExperienceFormComponent";
import { StoreContext } from "../../Context/StoreContext";

const ExperienceForm = () => {
  const { setExperienceInfo, store } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleSubmitMyForm = () => {
    const ValuesNotEmpty = store.experiences.every((obj)=>{
      return Object.values(obj).every(val=>val!=="")
    })
    if(ValuesNotEmpty){
      navigate("/education");
    }else{
      alert('გთხოვთ შეავსოთ ყველა ველი')
    }
  };

  return (
    <styled.LeftContainer>
      <Navbar title={"გამოცდილება"} page="2/3" />
      {store?.experiences.map((item, index) => (
        <ExperienceFormComponent index={index} key={index} />
      ))}
      <MoreOptionsButton onClick={() => setExperienceInfo()} type="button">
        მეტი გამოცდილების დამატება
      </MoreOptionsButton>
      <styled.NavigationContainer>
        <Link to={"/personal"}>
          <Button width="113px">უკან</Button>
        </Link>
        <Button onClick={handleSubmitMyForm} type="button" width="151px">
          შემდეგი
        </Button>
      </styled.NavigationContainer>
    </styled.LeftContainer>
  );
};

export default ExperienceForm;
