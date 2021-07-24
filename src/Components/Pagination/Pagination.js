import React , {useState} from "react";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pagination.css";

function PaginationComponent(props) {
  const [activePage, setActivePage] = useState(1)
  const paginationClicked = (event) => {
    var itemClicked = event.target.text;
    itemClicked = Number(itemClicked)
    props.onSaveHandler(itemClicked);
    setActivePage(itemClicked)
  };
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={paginationClicked}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div id="PaginationContainer">
      <Pagination size="lg">{items}</Pagination>
    </div>
  );
}

export default PaginationComponent;
