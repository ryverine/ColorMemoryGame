import React from "react";
import "./style.css";
// have button change color as score increases

function Score(props) {
  return (
    <div class="scoreBoard">
        <button type="button" class="btn btn-primary" disabled>
        Score: <span class="badge badge-light">{props.children}</span>
        </button>
    </div>
  );
}

export default Score;