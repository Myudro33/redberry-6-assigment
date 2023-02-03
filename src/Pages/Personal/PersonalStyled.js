import styled from "styled-components";




















export const RightContainer = styled.div`

`











//  მარცხენა მხარე !!!

export const Textarea = styled.textarea`
width: 100%;
height: 103px;
margin: 5px 0px;
border: 1px solid #BCBCBC;
resize: none;
padding: 10px;
&::placeholder {
    color: #00000060;
  }
`

export const FileTitle = styled.h1`
 color: #1A1A1A;
 font-size: 18px;
 font-weight: 500;
`
export const FileUploadContainer = styled.div`
width: 100%;
height: 20px;
margin-top: 30px;
display: flex;
align-items: center;
`

export const Requirements = styled.p`
color: #2E2E2E;
font-weight: 300;
font-size: 14px;
`

export const Input = styled.input`
  height: 48px;
  width: ${(props) => props.width};
  border: ${props=>props.border?'1px solid red':'1px solid #bcbcbc'};
  border-radius: 4px;
  padding: 10px;
  margin: 5px 0px;
  font-size: 16px;
  &::placeholder {
    color: #00000060;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 600;
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
