import React, { Component } from 'react';
import ArrowKeysReact from 'arrow-keys-react';
import logo from './logo.svg';
import './App.css';
import Board from './component/Board';

/**
 * @extends Component
 */
class App extends Component {
  
  /**
   * @description - Initializing Basic parmeters.
   */
  constructor() {
    super();  
    this.boardWidth = prompt("Please enter Board Height ");
    this.boardHeight = prompt("Please enter Board Width ");
    const gameSpeed = 300;
    this.foodCount = parseInt((this.boardWidth * this.boardHeight) /10);
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
    for(var i = 0; i < this.foodCount; i++) {
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

    this.foodCount = 0;
    // Assign cells with food
    for(var i = 0; i < foodCell.length; i++) {
      if(!this.board[foodCell[i].x][foodCell[i].y].isHavingFood) {
        this.board[foodCell[i].x][foodCell[i].y].isHavingFood = true;
        this.foodCount = this.foodCount + 1;
      }
      this.board[foodCell[i].x][foodCell[i].y].isHavingFood = true;
    }
    this.state = {
      marioPosition: {
        x: startPosition.x,
        y: startPosition.y
      },
      totalCount: 0
    };
    ArrowKeysReact.config({
      left: () => {
        if (this.state.marioPosition.y === 0) {
          alert('can\'t go this side any further');
        } else {
          this.setState({
            marioPosition: {
              x: this.state.marioPosition.x,
              y: --this.state.marioPosition.y
            },
            totalCount: ++this.state.totalCount
          });
        }
      },
      right: () => {
        if (this.state.marioPosition.y === (this.boardWidth - 1)) {
          alert('can\'t go this side any further');
        } else {
          this.setState({
            marioPosition: {
              x: this.state.marioPosition.x,
              y: ++this.state.marioPosition.y
            },
            totalCount: ++this.state.totalCount
          });
        }
      },
      up: () => {
        if (this.state.marioPosition.x === 0) {
          alert('can\'t go this side any further');
        }  else {
          this.setState({
            marioPosition: {
              x: --this.state.marioPosition.x,
              y: this.state.marioPosition.y
            },
            totalCount: ++this.state.totalCount
          });
        }
      },
      down: () => {
        if (this.state.marioPosition.x === (this.boardWidth - 1)) {
          alert('can\'t go this side any further');
        } else {
          this.setState({
            marioPosition: {
              x: ++this.state.marioPosition.x,
              y: this.state.marioPosition.y
            },
            totalCount: ++this.state.totalCount
          });
        }
      }
    });
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
   * @description - Rendering Outer Layout.
   * @todo - Adjust auto-focous.
   */
  render() {
    return (
      <div className="AppContainer" tabIndex="1" {...ArrowKeysReact.events}> 
        <Board boardWidth = {this.boardWidth} boardHeight = {this.boardHeight} board = {this.board} marioPosition = { this.state.marioPosition } foodCount= { this.foodCount } totalCount = { this.state.totalCount }/>
      </div>
    );
  }
}

export default App;
