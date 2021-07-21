import React from "react";
import "./RepoCard.css";

const RepoCard = () => {
  return (
    <div className="RepoContainerCard">
      <div className="ImageContianer"></div>
      <div className="RepoContent">
        <div className="RepoName"> Tensorflow</div>
        <div className="RepoDescription">An Open Source Machine Learning FrameWork for Everyone http://tensorflow.org</div>
        <div className="RepoInfo">
            <label className="NbStars">Starts</label>
            <label className="NbIssues">Issues</label>
            <label className="TimeInterval">Submitted 30 dats ago by tensorflow</label>
            </div>
      </div>
    </div>
  );
};

export default RepoCard;
