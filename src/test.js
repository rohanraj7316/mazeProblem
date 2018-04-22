
$(document).ready(function() {
  
    // constructor || component didmount.
    // Function to generate random number
    function getRandomArbitrary(min, max) {
      return parseInt(Math.random() * (max - min) + min);
    }
  
    // Getting board width and height
    const boardWidth = prompt("Please enter Board Width ");
    const boardHeight = prompt("Please enter Board Height ");
    
    // Setting game speed (msec)
    const gameSpeed = 300;
    
    // Generate food count with at max 1/10 th of cells
    let foodCount = parseInt((boardWidth * boardHeight) /10);
    
    // Generate random position. 
    
  
    const startPosition = {
      x: getRandomArbitrary(0, boardWidth),
      y: getRandomArbitrary(0, boardHeight),
    };
  
    var board = new Array(boardWidth);
  
    for(var i = 0; i < boardWidth; i++) {
      board[i] = new Array(boardHeight);
    }
    
    // Array containing cells that has food
    const foodCell = [];
    
    // Filling food cell. same cell can be repeated due to random fn.
    for(var i = 0; i < foodCount; i++) {
      const positionX = getRandomArbitrary(0, boardWidth);
      const positionY = getRandomArbitrary(0, boardHeight);
      
      if(!(startPosition.x == positionX && startPosition.y == positionY)) {
        foodCell.push({
          x: positionX,
          y: positionY,
        });
      }
   
    }
  
    // App container
    let appContainer = $('.appContainer');
  
    // Make an empty board
    for(var i = 0; i < boardWidth; i++) {
      for(var j = 0; j < boardHeight; j++) {
        board[i][j] = {
          x: i,
          y: j,
          isHavingFood: false,
        }
      }
    }
  
    foodCount = 0;
    // Assign cells with food
    for(var i = 0; i < foodCell.length; i++) {
      if(!board[foodCell[i].x][foodCell[i].y].isHavingFood) {
        board[foodCell[i].x][foodCell[i].y].isHavingFood = true;
        foodCount = foodCount + 1;
      }
      board[foodCell[i].x][foodCell[i].y].isHavingFood = true;
    }
  
    // Generate Board content
    let boardContent = "<div class = 'board'>";
  
    for(var i = 0; i < boardWidth; i++) {
      let rowContent = "<div class = 'row row-" + i + "'>\n";
      for(var j = 0; j < boardHeight; j++) {
        const additionalClass = board[i][j].isHavingFood ? 'food' : '';
        rowContent += "<div class = 'cell " + "row-" + i + " col-" + j + " " + additionalClass + " '" + "></div>" + "\n";
      }
      rowContent += "</div>";
      boardContent += rowContent;
    }
  
    appContainer.html(boardContent);
    
    let currentPosition = {
      x: startPosition.x,
      y: startPosition.y,
    };
    
    let marioLocationClass = '.row-' + currentPosition.x + '.col-' + currentPosition.y;
    $(marioLocationClass).addClass('mario-location');
    
    // Your Code Here 
    
    
  });