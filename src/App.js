import React, { Component } from "react";
import ColorCard from "./components/ColorCard";
import Wrapper from "./components/Wrapper";
import GameOver from "./components/GameOver";
import DifficultySelector from "./components/DifficultySelector";
import {Title, Subtitle} from "./components/Title";
import Score from "./components/Score";
import colors from "./colors.json";
// import easyColors from "./easyColors.json";
// import normalColors from "./normalColors.json";
// import hardColors from "./hardColors.json";

//let easyMax = 10;
let normalMax = 20;
//let hardMax = 36;

class App extends Component {
  state = {
    pickedColors: [],
    score: 0,
    maxScore: normalMax,
    gameOver: false,
    colors 
  };

  shuffleColorCards = () =>{
    let curCards = this.state.colors;
    let newCards = [];
 
    while (newCards.length < 20)
    {
      var curCardIndex = Math.floor(Math.random()*curCards.length);
      var testCard = curCards[curCardIndex];
      var foundCard = false;
      for (var i = 0; i < newCards.length; i++)
      {
        if(testCard.id === newCards[i].id)
        {
          foundCard = true;
          break;
        }
      }

      if(!foundCard)
      {
        newCards.push(testCard);
      }
    }

    return newCards;
  }
  
  colorPicked = id => {
    const tmpPickedColors = this.state.pickedColors;
    let tmpScore = this.state.score;
    
    if(tmpPickedColors.includes(id))
    {
      this.setState({gameOver: true});
    }
    else
    {
      tmpPickedColors.push(id);
      tmpScore++;
      this.setState({ 
        pickedColors: tmpPickedColors,
        score: tmpScore
      });

    }
    
    var shuffledColorCards = this.shuffleColorCards();

    this.setState({ colors: shuffledColorCards });

  };

  startGame = () => {
    console.log("START GAME");

    var colorList = [];
    var userScore = 0;
    var isGameOver = false;
    var shuffledColorCards = this.shuffleColorCards();

    this.setState({ 
      pickedColors: colorList,
      score: userScore,
      gameOver: isGameOver,
      colors: shuffledColorCards });
  };

  render() {
    if (this.state.gameOver)
    {
      return(
        <Wrapper>
          <Title>Color Memory Clicky Game</Title>
          <GameOver 
            title="GAME OVER!" 
            messageText="Maybe next time, chief!" 
            image="images/img_you_lose.png"
            score={this.state.score}
            startGame={this.startGame} /> 
        </Wrapper>
      );
    }
    else
    {
      if (this.state.score >= this.state.maxScore)
      {
        return(
          <Wrapper>
            <Title>Color Memory Clicky Game</Title>
            <GameOver 
              title="YOU WON" 
              messageText="You did so good!" 
              image="images/img_you_won.png"
              score={this.state.score}
              startGame={this.startGame} /> 
          </Wrapper>
        );
      }
      else
      {
        return (
          <React.Fragment>
            <Title>Color Memory Clicky Game</Title>
            <Subtitle>Try to pick each color only once!</Subtitle>
            <DifficultySelector />
            <Score>{this.state.score}</Score>
            <Wrapper>
            {this.state.colors.map(color => (
              <ColorCard
                colorPicked={this.colorPicked}
                key={color.id}
                id={color.id}
                name={color.name}
                image={color.image}
              />
            ))}
          </Wrapper>
          </React.Fragment>
        );
      }
    }
  }

}

export default App;


/*
Default create-react-app


import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;





*/