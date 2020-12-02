import React from "react";
import styled from "@emotion/styled";

const FooterCotainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
  flex-wrap: wrap;
`;

const PCopyright = styled.p`
  color: gray;
  margin: 0px;
  padding: 1rem;
  @media (max-width: 990px) {
    padding: 0.2rem;
  }
`;

const Footer = () => {
  return (
    <FooterCotainer>
      <PCopyright>&copy; Copyright - Kevin Alvarado Varela.</PCopyright>
      <PCopyright>All data get it from</PCopyright>
    </FooterCotainer>
  );
};

export default Footer;
