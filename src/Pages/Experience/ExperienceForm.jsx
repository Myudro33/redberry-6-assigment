import React, { useState } from "react";
import * as styled from "./ExperienceStyled";
import Navbar from "../../Components/Navbar";
import {
  Button,
  MoreOptionsButton,
} from "../../Components/GlobalStyledComponents";
import { Link } from "react-router-dom";

const ExperienceForm = () => {
  const [moreOptions, setmoreOptions] = useState([{}]);
  return (
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
        <MoreOptionsButton onClick={() => setmoreOptions([...moreOptions, {}])}>
          მეტი გამოცდილების დამატება
        </MoreOptionsButton>

        <styled.NavigationContainer>
          <Link to={"/personal"}>
            <Button width="113px">უკან</Button>
          </Link>
          <Link to={"/education"}>
            <Button width="151px">შემდეგი</Button>
          </Link>
        </styled.NavigationContainer>
      </styled.Form>
    </styled.LeftContainer>
  );
};

export default ExperienceForm;
