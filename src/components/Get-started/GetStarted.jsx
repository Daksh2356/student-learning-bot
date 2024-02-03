import React from "react";
import "./GetStarted.css";

const GetStarted = (props) => {

  return <div className="get-started-container">
    <button onClick={props.actionProvider.provideResponse} className="get-started-button">
      Got it !
    </button>
  </div>;
};

export default GetStarted;
