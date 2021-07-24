import logo from "./logo.svg";
import "./App.css";
import RepoCard from "./Components/RepoCard/RepoCard";
import WrappingRepoCards from "./Components/WrappingRepoCards/WrappingRepoCards";
import PaginationComponent from "./Components/Pagination/Pagination";
import { useState } from "react";

function App() {
  const [clickedPage, setClickedPage] = useState(1);
  const HandlerFunction = (ChildToParentConst) => {
    setClickedPage(ChildToParentConst);
  };

  return (
    <div className="App">
      <WrappingRepoCards clickedPage={clickedPage}></WrappingRepoCards>
      <PaginationComponent
        onSaveHandler={HandlerFunction}
      ></PaginationComponent>
    </div>
  );
}

export default App;
