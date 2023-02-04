import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import getDegrees from "./getDegrees";
import * as styled from "../Experience/ExperienceStyled";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/LOGO-12 1.png";
import { FiAtSign } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";

import {
  Button,
  MoreOptionsButton,
} from "../../Components/GlobalStyledComponents";
import { Link } from "react-router-dom";

const Education = () => {
  const [degrees, setdegrees] = useState();
  const [selectedDegree, setselectedDegree] = useState("");
  const [moreOptions, setmoreOptions] = useState([{}]);

  useEffect(() => {
    getDegrees(setdegrees);
  }, []);

  return (
    <styled.Container>
      <styled.LeftContainer>
        <Navbar page={"3/3"} title="განათლება" />
        <styled.Form>
          {moreOptions.map((item, index) => (
            <div key={index}>
              <styled.Label>
                სასწავლებელი
                <styled.Input
                  type={"text"}
                  width="100%"
                  placeholder="სასწავლებელი"
                />
                <styled.Requirements>მინიმუმ 2 სიმბოლო</styled.Requirements>
              </styled.Label>
              <styled.DateContainer>
                <styled.Label>
                  ხარისხი
                  <FormControl sx={{ my: 1, minWidth: "371px" }} size="medium">
                    <InputLabel
                      id="demo-select-large"
                      sx={{ width: "150px", backgroundColor: "#F9F9F9" }}
                    >
                      აირჩიეთ ხარისხი
                    </InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      label="Age"
                      sx={{ height: "48px" }}
                      value={selectedDegree}
                      onChange={(e) => setselectedDegree(e.target.value)}
                    >
                      {degrees?.map((degree) => (
                        <MenuItem key={degree.id} value={degree.title}>
                          {degree.title}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </styled.Label>
                <styled.Label>
                  დამთავრების თარიღი
                  <styled.Input type={"date"} width="371px" />
                </styled.Label>
              </styled.DateContainer>
              <styled.Label>
                აღწერა
                <styled.Textarea
                  style={{ height: "179px" }}
                  placeholder="განათლების აღწერა"
                />
              </styled.Label>
              <styled.Hr />
            </div>
          ))}
          <MoreOptionsButton
            onClick={() => setmoreOptions([...moreOptions, {}])}
          >
            სხვა სასწავლებლის დამატება
          </MoreOptionsButton>
          <styled.NavigationContainer style={{ marginTop: "150px" }}>
            <Link to={"/experience"}>
              <Button width="113px">უკან</Button>
            </Link>
            <Link to={"/resume"}>
              <Button width="151px">დასრულება</Button>
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
    </styled.Container>
  );
};

export default Education;
