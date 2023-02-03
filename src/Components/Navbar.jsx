import React from "react";
import styled from "styled-components";
import vector from "../assets/Vector.png";
import { Link } from "react-router-dom";

const Navbar = ({ title, page }) => {
  return (
    <Nav>
      <Link to={'/'}>
        <VectorContainer>
          <img src={vector} alt="vector" />
        </VectorContainer>
      </Link>
      <RightContainer>
        <TitleContainer>
          <Title>{title}</Title>
          <Page>
            {page}
          </Page>
        </TitleContainer>
        <Line />
      </RightContainer>
    </Nav>
  );
};

export default Navbar;


const Line = styled.hr`
width: 100%;
border: 1px solid #1A1A1A;
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 10px 0px;
`;

const Page = styled(Title)`
    font-size: 20px;
    font-weight: 400;
`
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 798px;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 798px;
  height: 100%;
  margin-left: 60px;
`;

const VectorContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`;
