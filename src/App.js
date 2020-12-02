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

function App() {
  return (
    <Container>
      <div>
        <Header title="ImgEngine" />
        <SearchBar />
      </div>
      <Footer />
    </Container>
  );
}

export default App;
