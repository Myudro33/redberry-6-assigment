import styled from "styled-components";


export const Button = styled.button`
  height: 48px;
  width: ${(props) => props.width};
  background-color: #6b40e3;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 130px;
  align-self: flex-end;
  &:hover{
    background-color: #7949FF;
    transition: .3s;
    cursor: pointer;
  }
`