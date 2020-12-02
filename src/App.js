import React from "react";
import styled from "@emotion/styled";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContainerSeachSection = styled.main`
  display: flex;
  flex-direction: ${(props) => (props.isSearchResults ? "row" : "column")};
  justify-content: space-between;
  align-items: ${(props) => (props.isSearchResults ? "flex-start" : "center")};
`;

function App() {
  const [isSearchResults, setIsSearchResults] = React.useState(true);
  return (
    <Container>
      <ContainerSeachSection isSearchResults={isSearchResults}>
        <Header title="ImgEngine" isSearchResults={isSearchResults} />
        <SearchBar
          isSearchResults={isSearchResults}
          setIsSearchResults={setIsSearchResults}
        />
      </ContainerSeachSection>
      <Footer />
    </Container>
  );
}

export default App;
