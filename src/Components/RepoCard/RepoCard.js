import React, { useState, useEffect } from "react";

import "./RepoCard.css";
const axios = require("axios").default;

const RepoCard = (props) => {
  const url = props.record.owner.avatar_url;
  const Time = props.record.created_at;
  const TrimedTime = Time.split("T");
  return (
    <div className="RepoContainerCard">
      <div className="ImageContianer">
        <img
          src={`${url}`}
          alt="Girl in a jacket"
          width="45%"
          height="100%"
        ></img>
      </div>
      <div className="RepoContent">
        <div className="RepoName"> {props.record.name}</div>
        <div className="RepoDescription">{props.record.description}</div>
        <div className="RepoInfo">
          <div className="NbContainer">
            <label className="NbStars">
              Stars : {props.record.stargazers_count}
            </label>
            <label className="NbIssues">
              Issues : {props.record.open_issues_count}
            </label>
          </div>
          <div className="TimeContainer">
            <label className="TimeInterval">
              Sumbit at {TrimedTime[0]} by {props.record.owner.login}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
