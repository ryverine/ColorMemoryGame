import React from "react";
import Score from "../Score";
import "./style.css";



function GameOver(props) {
  return (
    <div class="card">
        <img src={props.image} class="card-img-top" alt="game over"/>
        <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <Score>{props.score}</Score>
            <p class="card-text">{props.messageText}</p>
            <button class="btn btn-success" onClick={()=>props.startGame()}>Play Again</button>
        </div>
    </div>
  );
}

export default GameOver;