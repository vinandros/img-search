import React from "react";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: flex-end;
`;

const Huno = styled.h1`
  font-size: ${(props) => (props.isSearchResults ? "5vw" : "8vw")};
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
  margin-top: ${(props) => (props.isSearchResults ? "2vh" : "20vh")};
  margin-bottom: 0;
  margin-left: 10px;
  text-align: center;

  @media (max-width: 990px) {
    font-size: ${(props) => (props.isSearchResults ? "6vw" : "12vw")};
  }
`;

const ALink = styled.a`
  cursor: pointer;
`;

const Header = ({
  title,
  isSearchResults,
  setIsSearchResults,
  setSearchTerm,
}) => {
  const handleClick = () => {
    setIsSearchResults(false);
    setSearchTerm("");
    window.location.href = "/";
  };

  return (
    <HeaderContainer isSearchResults={isSearchResults}>
      <ALink onClick={handleClick}>
        <Huno isSearchResults={isSearchResults}>{title}</Huno>
      </ALink>
    </HeaderContainer>
  );
};

export default Header;
