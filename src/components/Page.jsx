import { Pagination } from "react-bootstrap";
import PropTypes from "prop-types";

const Page = ({ totalPages, currentPage, onPageChange }) => {
  const pageItems = [];

  for (let number = 1; number <= totalPages; number++) {
    pageItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => onPageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Pagination>
      <Pagination.Prev
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {pageItems}
      <Pagination.Next
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
};

Page.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Page;
