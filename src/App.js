import React from "react";
import styled from "@emotion/styled";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Results from "./components/Results";
import Pagination from "./components/Pagination";
import Spinner from "./components/Spinner/Spinner";

const Container = styled.div`
  width: ${(props) => (props.isSearchResults ? "98.7vw" : "100vw")};
  height: ${(props) => (props.isSearchResults ? "170vh" : "100vh")};
  display: ${(props) => (props.isSearchResults ? "block" : "flex")};
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 990px) {
    width: 95vw;
  }
`;

const ContainerSeachSection = styled.main`
  display: flex;
  flex-direction: ${(props) => (props.isSearchResults ? "row" : "column")};
  justify-content: space-between;
  align-items: ${(props) => (props.isSearchResults ? "flex-start" : "center")};
`;

const ContainerResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${(props) => (props.isSearchResults ? "170vh" : null)};
`;

function App() {
  const [isSearchResults, setIsSearchResults] = React.useState(false);
  const [resultImages, setResultImages] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <Container isSearchResults={isSearchResults}>
      <ContainerSeachSection isSearchResults={isSearchResults}>
        <Header
          title="ImgEngine"
          isSearchResults={isSearchResults}
          setIsSearchResults={setIsSearchResults}
          setSearchTerm={setSearchTerm}
        />
        <SearchBar
          isSearchResults={isSearchResults}
          setIsSearchResults={setIsSearchResults}
          setResultImages={setResultImages}
          setLoading={setLoading}
          currentPage={currentPage}
          setTotalPages={setTotalPages}
          setCurrentPage={setCurrentPage}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </ContainerSeachSection>
      <ContainerResults isSearchResults={isSearchResults}>
        {loading && <Spinner />}
        {isSearchResults && !loading && (
          <div>
            <Results resultImages={resultImages} />
          </div>
        )}
        <div>
          {isSearchResults && (
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          )}
          <Footer />
        </div>
      </ContainerResults>
    </Container>
  );
}

export default App;
