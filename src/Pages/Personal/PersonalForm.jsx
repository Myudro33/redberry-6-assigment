import React from "react";
import * as styled from "./PersonalStyled";
import Navbar from "../../Components/Navbar";
import { Button } from "../../Components/GlobalStyledComponents";
import { Link } from "react-router-dom";


const PersonalForm = () =>{
    return(
        <styled.LeftContainer>
        <Navbar title="პირადი ინფო" page={"1/3"} />
        <styled.Form>
          <styled.NameContainer>
            <styled.Label>
              სახელი
              <styled.Input type={"text"} placeholder="ანზორ" width={"371px"} />
              <styled.Requirements>
                მინიმუმ 2 ასო, ქართული ასოები
              </styled.Requirements>
            </styled.Label>
            <styled.Label>
              გვარი
              <styled.Input
                type={"text"}
                placeholder="მუმლაძე"
                width={"371px"}
              />
              <styled.Requirements>
                მინიმუმ 2 ასო, ქართული ასოები
              </styled.Requirements>
            </styled.Label>
          </styled.NameContainer>
          <styled.FileUploadContainer>
            <styled.FileTitle>პირადი ფოტოს ატვირთვა</styled.FileTitle>
            <label id="label" for="upload-photo">
              ატვირთვა
            </label>
            <input type="file" name="photo" id="upload-photo" />
          </styled.FileUploadContainer>
          <styled.Label style={{ marginTop: "50px" }}>
            ჩემს შესახებ (არასავალდებულო)
            <styled.Textarea placeholder="ზოგადი ინფო შენს შესახებ" />
          </styled.Label>
          <styled.Label style={{ marginTop: "50px" }}>
            ელ.ფოსტა
            <styled.Input
              placeholder="anzori666@redberry.ge"
              width={"100%"}
              type="email"
            />
            <styled.Requirements>
              უნდა მთავრდებოდეს @redberry.ge-ით
            </styled.Requirements>
          </styled.Label>
          <styled.Label style={{ marginTop: "50px" }}>
            მობილურის ნომერი
            <styled.Input placeholder="+995 551 12 31 12" />
            <styled.Requirements>
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </styled.Requirements>
          </styled.Label>
          <styled.NavigationContainer>

          <Link to={'/experience'}>
          <Button type="submit" width="151px">
            შემდეგი
          </Button>
          </Link>
          </styled.NavigationContainer>
        </styled.Form>
      </styled.LeftContainer>
    )
}


export default PersonalForm