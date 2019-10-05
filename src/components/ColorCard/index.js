import React from "react";
import "./style.css";

function ColorCard(props) {
  return (
   
      <div class="imgContainer">
        <img src={props.image} id={props.id} onClick={() => props.colorPicked(props.id)} alt="" />
      </div>

  );
}

export default ColorCard;
