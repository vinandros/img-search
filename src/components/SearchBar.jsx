import React from "react";
import styled from "@emotion/styled";
import getFullApiUrl from "../helpers/buildApiUrl";

const InputField = styled.input`
  width: 100%;
  height: 3.5vw;
  font-size: 3vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: 1px solid green;
  border-radius: 5px;

  &:focus {
    border: 2px solid #555;
  }
`;

const SubmitBottom = styled.button`
  color: white;
  margin-left: 0.7rem;
  border-radius: 5px;
  background: #2449ff;
  font-weight: bold;
  transition: background 0.4s ease;
  margin-right: 1rem;
  height: 4vw;
  width: 15%;

  &:hover {
    background: #0eac00;
  }

  @media (max-width: 990px) {
    display: ${(props) => (props.isSearchResults ? "none" : "")};
    margin-top: 1rem;
    width: 50%;
    font-weight: normal;
    height: 8vw;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.isSearchResults ? "80vw" : "70vw")};
  margin-top: ${(props) => (props.isSearchResults ? "2rem" : "2rem")};
  @media (min-width: 990px) {
    margin-left: 10px;
  }

  @media (max-width: 990px) {
    flex-direction: column;
    width: ${(props) => (props.isSearchResults ? "100%" : "90%")};
    margin-right: ${(props) => (props.isSearchResults ? "10px" : "0")};
    margin-top: ${(props) => (props.isSearchResults ? "1.3rem" : "3vw")};
  }
`;

const SearchBar = ({
  isSearchResults,
  setIsSearchResults,
  setResultImages,
  setLoading,
  currentPage,
  setTotalPages,
  setCurrentPage,
  searchTerm,
  setSearchTerm,
}) => {
  const [searchTermChange, setSearchTermChange] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (searchTermChange === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    if (searchTermChange !== searchTerm) {
      setCurrentPage(1);
    }

    setSearchTerm(searchTermChange);
  };

  React.useEffect(() => {
    if (searchTerm === "") {
      return;
    }
    const APIRequest = async (searchTerm, currentPage) => {
      const url = getFullApiUrl(searchTerm, currentPage);
      try {
        const res = await fetch(url);
        const result = await res.json();
        setLoading(true);
        setResultImages(result.hits);
        setTotalPages(
          Math.ceil(result.totalHits / process.env.REACT_APP_PAGINATION_LENGTH)
        );
        setIsSearchResults(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    };
    APIRequest(searchTerm, currentPage);
  }, [
    searchTerm,
    currentPage,
    setLoading,
    setIsSearchResults,
    setTotalPages,
    setResultImages,
  ]);

  return (
    <Form isSearchResults={isSearchResults} onSubmit={handleSubmit}>
      <InputField
        type="text"
        onChange={(e) => setSearchTermChange(e.target.value)}
        placeholder={error ? "Please enter a search term." : ""}
      />
      <SubmitBottom isSearchResults={isSearchResults} type="submit">
        Search
      </SubmitBottom>
    </Form>
  );
};

export default SearchBar;
