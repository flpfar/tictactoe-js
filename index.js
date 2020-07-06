/* eslint-disable */

const winnerup = document.querySelector('.winner');
const startButton = document.querySelector('.start-button');
const createInput = document.querySelector('.create-input');
const playerOne = document.getElementById('player1');
const playerTwo = document.getElementById('player2');
const errorForm = document.querySelector('.error-form');
const boardContainer = document.querySelector('.board-container');
const boardItems = document.querySelectorAll('.item');

const container = document.querySelector('.container-1');

const button = document.querySelector('.button');
const playerOneName = document.querySelector('.player1-name');
const playerTwoName = document.querySelector('.player2-name');
const restartButton = document.querySelector('.restart-button');
const gameBoard = (() => {
  const board = new Array(9).fill('');
  const chances = [
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 3, 6],
    [2, 4, 6],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const checkWinner = () => {
    for (let i = 0; i < chances.length; i++) {
      if (
        board[chances[i][0]] === 'X' &&
        board[chances[i][1]] === 'X' &&
        board[chances[i][2]] === 'X'
      ) {
        return 1;
      } else if (
        board[chances[i][0]] === 'O' &&
        board[chances[i][1]] === 'O' &&
        board[chances[i][2]] === 'O'
      ) {
        return 2;
      } else {
        return 0;
      }
    }
  };

  let turn = 0;

  function addTurn() {
    turn += 1;
  }

  function getTurn() {
    return turn;
  }
  return { board, addTurn, getTurn, checkWinner };
})();

const displayController = (gameBoard) => {
  const boardItems = document.querySelectorAll('.item');
  const render = () => {
    for (let i = 0; i < boardItems.length; i++) {
      if (gameBoard.board[i] !== '') {
        boardItems[i].innerHTML =
          gameBoard.board[i] == 'X'
            ? '<div class="text-red-500"><i class="fas fa-dog"></i></div>'
            : '<div class="text-white"><i class="fas fa-cat"></i></div>';
      }
    }
  };

  const startListeners = () => {
    let c = [];
    for (let i = 0; i < boardItems.length; i++) {
      boardItems[i].addEventListener('click', function () {
        if (gameBoard.board[i] === '') {
          if (gameBoard.getTurn() % 2 === 0) {
            gameBoard.board[i] = 'X';
          } else {
            gameBoard.board[i] = 'O';
          }
          gameBoard.addTurn();

          if (gameBoard.checkWinner() === 1) {
            winnerup.innerHTML = `Congratulations player1.name Wins`;
          } else if (
            gameBoard.checkWinner() === 0 &&
            gameBoard.getTurn() === 9
          ) {
            winnerup.innerHTML = `Nobody Wins`;
          } else {
            winnerup.innerHTML = `Congratulations player2.name Wins`;
          }
          render();
        }
      });
    }
  };
  const restart = () => {
    const boardItems = document.querySelectorAll('.item');
    for (let i = 0; i < boardItems.length; i += 1) {
      boardItems[i].innerHTML = '';
      gameBoard.board[i] = '';
      gameBoard.setTurn
    }
  };

  return { render, startListeners };
};

const player = (name) => {
  return { name };
};

const game = () => {
  const display = displayController(gameBoard);
  display.startListeners();
};

game();
