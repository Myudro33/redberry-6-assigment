import styled from "styled-components";

export const AbsoluteImage = styled.img`
  width: 42px;
  height: 42px;
  position: absolute;
  bottom: 40px;
`;

export const PersonalImage = styled.img`
  width: 246px;
  height: 246px;
  border-radius: 50%;
  border: 1px solid black;
`;
export const AboutMySelf = styled.p`
  font-size: 16px;
  color: #000000;
  width: 430px;
`;

export const Contact = styled.p`
  color: #1a1a1a;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin: 5px 0px;
`;

export const NameTitle = styled.h1`
  color: #f93b1d;
  font-size: 34px;
  font-weight: bolder;
  margin: 10px 0px;
`;

export const PersonalInfoContainer = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const PersonalContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;
`;

export const RightContainer = styled.div`
  width: 822px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 80px 50px;
`;

//  მარცხენა მხარე !!!

export const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 130px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 103px;
  margin: 5px 0px;
  border: 1px solid #bcbcbc;
  resize: none;
  border-radius: 4px;
  padding: 10px;
  &::placeholder {
    color: #00000060;
  }
`;

export const FileTitle = styled.h1`
  color: ${(props) => (props.error ? props.error : "#1a1a1a")};
  font-size: 18px;
  font-weight: 900;
`;
export const FileUploadContainer = styled.div`
  width: 50%;
  height: 20px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  position: relative;
`;
export const Requirements = styled.p`
  color: ${(props) => (props.color ? props.color : "#2e2e2e")};
  font-weight: 300;
  font-size: 14px;
`;

export const Input = styled.input`
  height: 48px;
  width: ${(props) => props.width};
  border: ${props=>props.border||'2px solid #bcbcbc'};
  border-radius: 4px;
  padding: 10px;
  margin: 5px 0px;
  font-size: 16px;
  &::placeholder {
    color: #00000060;
  }
`;

export const Label = styled.label`
  color: ${(props) => (props.color ? props.color : "#000")};
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 600;
  position: relative;
`;

export const NameContainer = styled.div`
  width: 100%;
  height: 122px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.form`
  width: 798px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;

export const LeftContainer = styled.div`
  width: 1098px;
  height: 100%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
