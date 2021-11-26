import React from "react";
import "./style.css";

function DifficultySelector(props) {

    let btnClass = "";
    
    if (props.type === "Easy")
    {
        btnClass="btn btn-success difficultySelector";
    }
    else if (props.type === "Normal")
    {
        btnClass="btn btn-warning difficultySelector";
    }
    else if (props.type === "Hard")
    {
        btnClass="btn btn-danger difficultySelector";
    }
    else {}

//onclick="myFunction()"

  return (
    <button className={btnClass} onClick={props.onClick}>{props.type}</button>
  );
}

export default DifficultySelector;
