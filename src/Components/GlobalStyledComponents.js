import styled from "styled-components";






export const MoreOptionsButton = styled.button`
width: 289px;
height: 48px;
background-color: #62A1EB;
color: white;
border-radius: 4px;
font-size: 16px;
border: none;
margin: 20px 0px;
`



export const Button = styled.button`
  height: 48px;
  width: ${(props) => props.width};
  background-color: #6b40e3;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  align-self: flex-end;
  &:hover{
    background-color: #7949FF;
    transition: .3s;
    cursor: pointer;
  }
`