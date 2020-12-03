import styled from "@emotion/styled";
import React from "react";
import Card from "./Card";

const ResultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;

const Results = ({ resultImages }) => {
  return (
    <ResultContainer>
      {resultImages.map((imageData) => (
        <Card key={imageData.id} imageData={imageData} />
      ))}
    </ResultContainer>
  );
};

export default Results;
