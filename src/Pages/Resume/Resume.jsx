import React, { useContext,useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";
import * as styled from "./ResumeStyled.js";
import vector from "../../assets/Vector.png";
import { GrFormClose } from "react-icons/gr";
import { FiAtSign } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import logo from '../../assets/LOGO-12 1.png'
import 'animate.css';

const Resume = () => {
  const { store,getDegreeFromId } = useContext(StoreContext);
  const [popUp, setpopUp] = useState(true);
  const navigate = useNavigate();

  return (
    <styled.Container>
      <styled.NavigateHomeWrapper onClick={() => navigate("/")}>
        <img src={vector} alt="" />
      </styled.NavigateHomeWrapper>
      <styled.Wrapper>
        <styled.PersonalContainer>
          <styled.PersonalLeft>
            <styled.PersonalTitle>
              {`${store.name} ${" "} ${store.surname}`}
            </styled.PersonalTitle>
            <styled.ContactTitle>
              <FiAtSign style={{ marginRight: "10px",color:'#bcbcbc' }} />
              {store.email}
            </styled.ContactTitle>
            <styled.ContactTitle>
              <BsFillTelephoneFill style={{ marginRight: "10px",color:'#bcbcbc' }} />
              {store.phone_number}
            </styled.ContactTitle>
            <styled.HeadingTitle>ჩემს შესახებ</styled.HeadingTitle>
            <styled.AboutMySelfTitle>{store.about_me}</styled.AboutMySelfTitle>
          </styled.PersonalLeft>
          <styled.Image src={store.file} alt="userpic" />
        </styled.PersonalContainer>
        <styled.Hr />
        <styled.ExperienceContainer>
          <styled.HeadingTitle>გამოცდილება</styled.HeadingTitle>
          {store?.experiences.map((item, index) => (
            <div key={index}>
              <styled.Heading>{`${item.position}, ${" "} ${
                item.employer
              } `}</styled.Heading>
              <styled.Date>{`${item.start_date} ${" - "} ${item.due_date}`}</styled.Date>
              <styled.AboutExperience>
                {item.description}
              </styled.AboutExperience>
            </div>
          ))}
        </styled.ExperienceContainer>
        <styled.Hr/>
        <styled.ExperienceContainer>
          <styled.HeadingTitle>განათლება</styled.HeadingTitle>
          {store?.educations.map((item,index)=>(
            <div key={index} >
             <styled.Heading>{`${item.institute}, ${" "} ${getDegreeFromId(item.degree_id)}`}</styled.Heading>
             <styled.Date>{item.due_date}</styled.Date>
             <styled.AboutEducation>{item.description}</styled.AboutEducation>
            </div>
          ))}
        </styled.ExperienceContainer>
        <styled.AbsoluteImage src={logo} alt='logo' />
      </styled.Wrapper>
      {popUp && (
        <styled.PopUpContainer className="animate__animated animate__bounce" >
          <GrFormClose
            onClick={() => setpopUp(false)}
            style={{ alignSelf: "flex-end", fontSize: "30px",cursor:'pointer' }}
          />
          <styled.PopUpTitle>რეზიუმე წარმატებით არ გაიგზავნა :)🎉</styled.PopUpTitle>
        </styled.PopUpContainer>
      )}
    </styled.Container>
  );
};

export default Resume;
