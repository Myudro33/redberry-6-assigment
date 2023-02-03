import React, { useState } from "react";
import * as styled from "./ExperienceStyled";
import Navbar from "../../Components/Navbar";
import {
  Button,
  MoreOptionsButton,
} from "../../Components/GlobalStyledComponents";
import { Link } from "react-router-dom";
import { FiAtSign } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import logo from "../../assets/LOGO-12 1.png";

const Experience = () => {
  const [moreOptions, setmoreOptions] = useState([{}]);
  return (
    <styled.Container>
      <styled.LeftContainer>
        <Navbar title={"გამოცდილება"} page="2/3" />
        <styled.Form>
          {moreOptions.map((item, index) => (
            <div key={index}>
              <styled.Label>
                თანამდებობა
                <styled.Input
                  width={"100%"}
                  placeholder="დველოპერი, დიზაინერი, ა.შ"
                  type={"text"}
                />
                <styled.Requirements>მინიმუმ 2 სიმბოლო</styled.Requirements>
              </styled.Label>
              <styled.Label>
                დამსაქმებელი
                <styled.Input
                  width={"100%"}
                  placeholder="დამსაქმებელი"
                  type={"text"}
                />
                <styled.Requirements>მინიმუმ 2 სიმბოლო</styled.Requirements>
              </styled.Label>
              <styled.DateContainer>
                <styled.Label>
                  დაწყების თარიღი
                  <styled.Input width={"371px"} type={"date"} />
                </styled.Label>
                <styled.Label>
                  დამთავრების თარიღი
                  <styled.Input width={"371px"} type={"date"} />
                </styled.Label>
              </styled.DateContainer>
              <styled.Label>
                აღწერა
                <styled.Textarea placeholder="როლი თანამდებობაზე და ზოგადი აღწერა" />
              </styled.Label>
              <styled.Hr />
            </div>
          ))}
          <MoreOptionsButton
            onClick={() => setmoreOptions([...moreOptions, {}])}
          >
            მეტი გამოცდილების დამატება
          </MoreOptionsButton>

          <styled.NavigationContainer>
            <Link to={"/personal"}>
              <Button style={{ margin: 0 }} width="113px">
                უკან
              </Button>
            </Link>
            <Link to={"/education"}>
              <Button style={{ margin: 0 }} width="151px">
                შემდეგი
              </Button>
            </Link>
          </styled.NavigationContainer>
        </styled.Form>
      </styled.LeftContainer>
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
        <styled.AbsoluteImage src={logo} alt="logo" />
      </styled.RightContainer>
    </styled.Container>
  );
};

export default Experience;
