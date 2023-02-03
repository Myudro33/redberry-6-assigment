import React from "react";
import * as styled from "./PersonalStyled";
import Navbar from "../../Components/Navbar";
import { Button } from "../../Components/GlobalStyledComponents";
import { FiAtSign } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
const Personal = () => {
  return (
    <styled.Container>
      <styled.LeftContainer>
        <Navbar title="პირადი ინფო" page={"1/3"} navigate="/" />
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
          <Button type="submit" width="151px">
            შემდეგი
          </Button>
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
          <styled.PersonalImage/>
        </styled.PersonalContainer>
      </styled.RightContainer>
    </styled.Container>
  );
};

export default Personal;
