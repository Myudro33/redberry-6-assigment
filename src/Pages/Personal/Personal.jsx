import React from "react";
import * as styled from "./PersonalStyled";
import { FiAtSign } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import logo from '../../assets/LOGO-12 1.png'
import PersonalForm from "./PersonalForm";


const Personal = () => {
  return (
    <styled.Container>
       <PersonalForm/>
      <styled.RightContainer>
        <styled.PersonalContainer>
          <styled.PersonalInfoContainer>
            <styled.NameTitle>ანზორ მუმლაძე</styled.NameTitle>
            <styled.Contact>
              <FiAtSign style={{ color: "#898989", marginRight: "5px" }} />{" "}
              anzorr666@gmail.com
            </styled.Contact>
            <styled.Contact>
              <BsFillTelephoneFill
                style={{ color: "#898989", marginRight: "5px" }}
              />{" "}
              +995 597 63 45 16
            </styled.Contact>
            <styled.NameTitle style={{ fontSize: "18px", margin: "15px 0px" }}>
              ჩემს შესახებ
            </styled.NameTitle>
            <styled.AboutMySelf>
              ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები
              გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ.
            </styled.AboutMySelf>
          </styled.PersonalInfoContainer>
          <styled.PersonalImage />
        </styled.PersonalContainer>
        <styled.AbsoluteImage src={logo} alt='logo' />
      </styled.RightContainer>
    </styled.Container>
  );
};

export default Personal;
