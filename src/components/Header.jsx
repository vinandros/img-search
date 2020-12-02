import React from "react";
import styled from "@emotion/styled";
import profileLogo from "../profile.svg";

const HeaderContainer = styled.header`
  border: 1px black solid;
  margin: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: flex-end;

  @media (max-width: 990px) {
  }
`;

const Huno = styled.h1`
  font-size: 10vw;
  background: -webkit-linear-gradient(
    180deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(22, 255, 0, 1) 29%,
    rgba(0, 35, 254, 1) 65%,
    rgba(255, 0, 0, 1) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-weight: bolder;
  width: 100%;
  margin-top: 20vh;
  margin-bottom: 0;
  text-align: center;
  border: 1px red solid;

  @media (min-width: 990px) {
    font-size: 6rem;
  }
`;

const ProfileLogoImg = styled.img`
  width: 7vw;
  height: 6vw;
  min-width: 1rem;
  min-height: 1rem;
  text-align: right;
  @media (min-width: 990px) {
    max-height: 4rem;
    max-width: 4rem;
  }
`;

const ProfileContainer = styled.div`
  padding: 0.5rem;
`;

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <ProfileContainer>
        <ProfileLogoImg src={profileLogo} />
      </ProfileContainer>
      <Huno>{title}</Huno>
    </HeaderContainer>
  );
};

export default Header;
