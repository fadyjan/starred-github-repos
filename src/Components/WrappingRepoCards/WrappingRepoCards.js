import React, { useState, useEffect } from "react";
import "./WrappingRepoCards.css";
import RepoCard from "../RepoCard/RepoCard";
const axios = require("axios").default;

const WrappingRepoCards = (props) => {
  const [repos, setRepos] = useState([]);
  const clickedPage= props.clickedPage 
  async function FetchApi() {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${clickedPage}`
      );
      //   console.log(response.data);
      setRepos(response.data.items);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  }

  useEffect(() => {
    FetchApi();
  }, [clickedPage]);

  return (
    <div id="CardsCotainer">
      {repos.map((record) => {
        return <RepoCard record={record}></RepoCard>;
      })}
    </div>
  );
};

export default WrappingRepoCards;
