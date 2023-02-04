import React from "react";
import * as styled from "../Pages/Experience/ExperienceStyled.js";
import { FiAtSign } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import logo from '../assets/LOGO-12 1.png'

const Resume = () => {
  return (
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
        <styled.Hr style={{ margin: 0 }} />
        <styled.ExperienceContainer>
          <styled.NameTitle style={{ fontSize: "18px", margin: "15px 0px" }}>
            გამოცდილება
          </styled.NameTitle>
          <styled.ExperienceTitle>
            React Native Developer, Microsoft
          </styled.ExperienceTitle>
          <styled.ExperienceDate>2020-09-23 - 2020-09-23</styled.ExperienceDate>
          <styled.AboutExperience>
            Experienced Javascript Native Developer with 5 years in the
            industry. proficient withreact. Used problem-solving aptitude to
            encahge application performance by 14%.created data visualisation
            tools and integrated designs.
          </styled.AboutExperience>
        </styled.ExperienceContainer>
        <styled.Hr style={{ margin: 0 }} />
        <styled.NameTitle style={{ fontSize: "18px", margin: "15px 0px" }}>
          განათლება
        </styled.NameTitle>
        <styled.ExperienceTitle>
          წმ. ანდრიას საპატრიარქოს სასწავლებელი,
        </styled.ExperienceTitle>
        <styled.ExperienceDate>2020-09-09</styled.ExperienceDate>
        <styled.AboutExperience style={{width:'662px'}} >
          ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — ვქენი.
          კომპიუტერები მიყვარდა. ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე.
          მეუნებოდნენ — დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა და
          ჩაგიკაკუნებსო. აჰა, მოვიდა დრო და ვერა ვარ დეველოპერი?
        </styled.AboutExperience>
        <styled.AbsoluteImage src={logo} alt="logo" />
      </styled.RightContainer>
  )
}

export default Resume