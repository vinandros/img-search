import styled from "@emotion/styled";
import React from "react";

const ButtomSelect = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: white;
  cursor: pointer;
`;
const PageSelect = ({ pageNumber }) => {
  return <ButtomSelect>{pageNumber}</ButtomSelect>;
};

const PaginationContainer = styled.div`
  display: flex;
  margin: 2rem;
  justify-content: center;
  align-items: center;
`;

const Pagination = ({ setCurrentPage, currentPage, totalPages }) => {
  if (totalPages === 1) {
    return null;
  }
  const handlePrevios = () => {
    if (currentPage > 1 && currentPage <= totalPages) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage > 0 && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <PaginationContainer>
      <ButtomSelect onClick={handlePrevios}>&laquo;</ButtomSelect>
      <PageSelect pageNumber={currentPage} />
      <ButtomSelect onClick={handleNext}>&raquo;</ButtomSelect>
    </PaginationContainer>
  );
};

export default Pagination;
