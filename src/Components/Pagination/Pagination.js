import React from "react";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pagination.css";

function PaginationComponent(props) {
  const paginationClicked = (event) => {
    var itemClicked = event.target.text;
    itemClicked = Number(itemClicked)
    props.onSaveHandler(itemClicked);
  };
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={paginationClicked}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination size="lg">{items}</Pagination>
    </div>
  );
}

export default PaginationComponent;
