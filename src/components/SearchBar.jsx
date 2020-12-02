import React from "react";
import styled from "@emotion/styled";

const SearchContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid pink; */
  @media (max-width: 990px) {
    margin-top: 0.5rem;
  }
`;

const InputField = styled.input`
  width: 50vw;
  height: 2rem;
  /* border-radius: 15px; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: 1px solid green;
  border-radius: 5px;

  @media (max-width: 990px) {
    width: 80vw;
  }

  &:focus {
    border: 2px solid #555;
  }
`;

const SubmitBottom = styled.button`
  width: 10vw;
  height: 3rem;
  margin-top: 2rem;
  color: white;
  border-radius: 12px;
  background: -webkit-linear-gradient(
    180deg,
    rgba(22, 255, 0, 1) 0%,
    rgba(0, 35, 254, 1) 100%
  );
  transition: background 4s;
  font-weight: bold;
  &:hover {
    background: -webkit-linear-gradient(
      180deg,
      rgba(0, 35, 254, 1) 0%,
      rgba(22, 255, 0, 1) 100%
    );
  }

  @media (max-width: 990px) {
    width: 30vw;
    height: 2rem;
    margin-top: 1rem;
  }
`;

const SearchBar = () => {
  return (
    <SearchContainer>
      <form action="">
        <InputField type="text" />
      </form>
      <SubmitBottom type="submit">Search</SubmitBottom>
    </SearchContainer>
  );
};

export default SearchBar;
