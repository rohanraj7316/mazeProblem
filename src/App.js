import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './component/Board';

class App extends Component {
  
  /**
   * 
   */
  constructor() {
    super();  
    this.boardWidth = prompt("Please enter Board Width ");
    this.boardHeight = prompt("Please enter Board Height ");
    const gameSpeed = 300;
    let foodCount = parseInt((this.boardWidth * this.boardHeight) /10);
    const startPosition = {
      x: this.getRandomArbitrary(0, this.boardWidth),
      y: this.getRandomArbitrary(0, this.boardHeight)
    };
    this.board = new Array(this.boardWidth);

    for(var i = 0; i < this.boardWidth; i++) {
      this.board[i] = new Array(this.boardHeight);
    }
    
    // Array containing cells that has food
    const foodCell = [];
    
    // Filling food cell. same cell can be repeated due to random fn.
    for(var i = 0; i < foodCount; i++) {
      const positionX = this.getRandomArbitrary(0, this.boardWidth);
      const positionY = this.getRandomArbitrary(0, this.boardHeight);
      
      if(!(startPosition.x == positionX && startPosition.y == positionY)) {
        foodCell.push({
          x: positionX,
          y: positionY,
        });
      }
    }

    for(var i = 0; i < this.boardWidth; i++) {
      for(var j = 0; j < this.boardHeight; j++) {
        this.board[i][j] = {
          x: i,
          y: j,
          isHavingFood: false,
        }
      }
    }

    foodCount = 0;
    // Assign cells with food
    for(var i = 0; i < foodCell.length; i++) {
      if(!this.board[foodCell[i].x][foodCell[i].y].isHavingFood) {
        this.board[foodCell[i].x][foodCell[i].y].isHavingFood = true;
        foodCount = foodCount + 1;
      }
      this.board[foodCell[i].x][foodCell[i].y].isHavingFood = true;
    }
  }
  /**
   * 
   * @param {Number} min 
   * @param {Number} max 
   */
  getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }
  /**
   * 
   */
  render() {
    return (
      <div className="AppContainer">
        <Board boardWidth = {this.boardWidth} boardHeight = {this.boardHeight} board = {this.board} />
      </div>
    );
  }
}

export default App;
