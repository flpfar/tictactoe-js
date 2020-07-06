/* eslint-disable */

const gameBoard = (() => {
  const board = new Array(9).fill('');
  
  let turn = 0;

  function addTurn() {
    turn += 1;
  }

  function getTurn() {
    return turn;
  }
  return {board, addTurn, getTurn}
})();

const displayController = (gameBoard) => {
  const boardItems = document.querySelectorAll('.item');
  const render = () => {
    for(let i = 0; i < boardItems.length; i++){
      if(gameBoard.board[i] !== '') {
        boardItems[i].innerHTML = (gameBoard.board[i] == 'X') ? '<div class="text-red-500"><i class="fas fa-dog"></i></div>' : '<div class="text-white"><i class="fas fa-cat"></i></div>';
      }
    }
  }

  const startListeners = () => {
    for (let i = 0; i < boardItems.length; i++) {
      boardItems[i].addEventListener('click', function () {
        if (gameBoard.board[i] === '') {
            if(gameBoard.getTurn()%2===0)
            {
              gameBoard.board[i]='X';
            }
            else{
              gameBoard.board[i]='O';
            }
            gameBoard.addTurn();
            render();
        }
      });
    }
  }
  return {render, startListeners}
};

const player = (name) => {
  return {name}
};

const game = () => {
  const display = displayController(gameBoard);
  display.startListeners();

}

game()