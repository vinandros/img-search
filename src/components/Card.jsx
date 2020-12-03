import React from "react";
import styled from "@emotion/styled";
import { FcLike } from "react-icons/fc";

const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 0.5rem;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PLikes = styled.p`
  padding: 0.2rem;
  margin: 0;
  align-content: center;
`;

const ImgCar = styled.img`
  width: 170px;
  height: 119px;
`;

const ALink = styled.a`
  text-decoration: none;
  color: black;
  &:visited {
    color: black;
  }
`;

const Card = ({ imageData }) => {
  const { previewURL, largeImageURL, likes, views } = imageData;
  return (
    <CardContainer>
      <ALink href={largeImageURL} target="_blank">
        <ImgCar src={previewURL} alt="Avatar" />
        <CardBody>
          <PLikes>
            <FcLike /> {likes}
          </PLikes>
          <PLikes>
            {views}
            &nbsp;views
          </PLikes>
        </CardBody>
      </ALink>
    </CardContainer>
  );
};

export default Card;
