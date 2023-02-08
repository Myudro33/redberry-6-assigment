import React, { useContext, useEffect, useState } from "react";
import * as styled from "../Pages/Experience/ExperienceStyled.js";
import { FiAtSign } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import logo from "../assets/LOGO-12 1.png";
import { StoreContext } from "../Context/StoreContext.js";

const Resume = () => {
  const { store } = useContext(StoreContext);
  return (
    <styled.RightContainer>
      <styled.PersonalContainer>
        <styled.PersonalInfoContainer>
          <styled.NameTitle>{`${store?.name} ${" "} ${
            store?.surname
          }`}</styled.NameTitle>
          <styled.Contact>
            {store?.email !== "" && (
              <FiAtSign style={{ color: "#898989", marginRight: "5px" }} />
            )}
            {store?.email}
          </styled.Contact>
          <styled.Contact>
            {store?.phone_number !== "" && (
              <BsFillTelephoneFill
                style={{ color: "#898989", marginRight: "5px" }}
              />
            )}
            {store?.phone_number}
          </styled.Contact>
          {store?.about_me !== "" && (
            <styled.NameTitle style={{ fontSize: "18px", margin: "15px 0px" }}>
              ჩემს შესახებ
            </styled.NameTitle>
          )}
          <styled.AboutMySelf>{store?.about_me}</styled.AboutMySelf>
        </styled.PersonalInfoContainer>
        <styled.PersonalImage src={store.file} />
      </styled.PersonalContainer>
      {store.file && <styled.Hr style={{ margin: 0 }} />}
      <styled.ExperienceContainer>
        {store.experiences[0].position && (
          <styled.NameTitle style={{ fontSize: "18px", margin: "15px 0px" }}>
            გამოცდილება
          </styled.NameTitle>
        )}
        {store?.experiences.map((item) => (
          <div key={item.id}>
            {item.position && (
              <styled.ExperienceTitle>
                {`${item.position}, ${" "} ${item.employer} `}
              </styled.ExperienceTitle>
            )}
            {item.start_date && (
              <styled.ExperienceDate>
                {`${item.start_date} ${" - "} ${item.due_date} `}
              </styled.ExperienceDate>
            )}
            <styled.AboutExperience>{item.description}</styled.AboutExperience>
          </div>
        ))}
      </styled.ExperienceContainer>
      {store.experiences[0].description && <styled.Hr style={{ margin: 0 }} />}
      <styled.ExperienceContainer>
        {store.educations[0].institute && (
          <styled.NameTitle style={{ fontSize: "18px", margin: "15px 0px" }}>
            განათლება
          </styled.NameTitle>
        )}
        {store.educations.map((item) => (
          <div key={item.id}>
            {item.institute && (
              <styled.ExperienceTitle>
                {`${item.institute}, ${" "} ${item.degree}`}
              </styled.ExperienceTitle>
            )}
            <styled.ExperienceDate>{item.due_date}</styled.ExperienceDate>
            <styled.AboutExperience style={{ width: "662px" }}>
              {item.description}
            </styled.AboutExperience>
          </div>
        ))}
      </styled.ExperienceContainer>
      <styled.AbsoluteImage src={logo} alt="logo" />
    </styled.RightContainer>
  );
};

export default Resume;
