import styled from "styled-components";






export const AbsoluteImage = styled.img`
  width: 42px;
  height: 42px;
  position: absolute;
  bottom: 70px;
`;

export const AboutExperience = styled.p`
color: black;
font-size: 16px;
width: 100%;
word-wrap: break-word;
margin-top: 15px;
`

export const AboutEducation = styled(AboutExperience)`
 width: 600px;
`


export const Date = styled.p`
color: #909090;
font-size: 16px;
`
export const Heading = styled.p`
  color: #1a1a1a;
  font-size: 16px;
  font-weight: bolder;
  margin: 10px 0px;
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 30px 0px;
`;


export const Image = styled.img`
  width: 246px;
  height: 246px;
  object-fit: cover;
  border-radius: 50%;
`;
export const Hr = styled.hr`
  border: 1px solid #c8c8c8;
  margin: 15px 0px;
  width: 100%;
`;
export const AboutMySelfTitle = styled.p`
  color: black;
  font-size: 16px;
  width: 432px;
  word-wrap: break-word;
`;

export const HeadingTitle = styled.h1`
  color: #f93b1d;
  font-size: 18px;
  margin: 15px 0px;
`;

export const ContactTitle = styled.p`
  margin: 10px 0px;
  display: flex;
  align-items: center;
  color: #1a1a1a;
  font-size: 18px;
`;

export const PersonalTitle = styled.h1`
  color: #f93b1d;
  font-size: 36px;
  font-weight: bolder;
`;
export const PersonalLeft = styled.div`
  width: 64%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const PersonalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  width: 822px;
  min-height: 100vh;
  height: auto;
  border: 1px solid black;
  padding: 80px 60px;
`;

export const PopUpTitle = styled.h1`
  width: 364px;
  height: 86px;
  align-self: center;
  margin: auto;
  font-size: 28px;
`;
export const PopUpContainer = styled.div`
  width: 427px;
  height: 167px;
  padding: 10px;
  position: absolute;
  top: 40px;
  right: 40px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const NavigateHomeWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 40px;
  top: 40px;
  cursor: pointer;
`;
export const Container = styled.div`
  width: 100vw;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
