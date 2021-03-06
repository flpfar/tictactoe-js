import './style.css';
import checkWinner from './check-winner';

const gameBoard = (() => {
  const board = new Array(9).fill('');

  let turn = 0;

  function addTurn() {
    turn += 1;
  }

  function getTurn() {
    return turn;
  }
  const reset = () => {
    turn = 0;
  };
  return {
    board,
    addTurn,
    getTurn,

    reset,
  };
})();

const displayController = (gameBoard) => {
  const winnerup = document.querySelector('.winner');
  const startButton = document.querySelector('.start-button');
  const createInput = document.querySelector('.create-input');
  const playerOne = document.getElementById('player1');
  const playerTwo = document.getElementById('player2');
  const errorForm = document.querySelector('.error-form');
  const boardContainer = document.querySelector('.board-container');

  const container = document.querySelector('.container-1');

  const button = document.querySelector('.button');
  const playerOneName = document.querySelector('.player1-name');
  const playerTwoName = document.querySelector('.player2-name');
  const restartButton = document.querySelector('.restart-button');
  const boardItems = document.querySelectorAll('.item');
  const render = () => {
    for (let i = 0; i < boardItems.length; i += 1) {
      if (gameBoard.board[i] !== '') {
        boardItems[i].innerHTML = gameBoard.board[i] === 'X'
          ? '<div class="text-red-500"><i class="fas fa-dog"></i></div>'
          : '<div class="text-white"><i class="fas fa-cat"></i></div>';
      }
    }
  };
  const showName = () => {
    playerOneName.textContent = playerOne.value;
    playerTwoName.textContent = playerTwo.value;
  };
  const restart = () => {
    for (let i = 0; i < boardItems.length; i += 1) {
      boardItems[i].innerHTML = '';
      gameBoard.board[i] = '';
    }

    gameBoard.reset();
  };

  const startListeners = () => {
    for (let i = 0; i < boardItems.length; i += 1) {
      boardItems[i].addEventListener('click', () => {
        if (gameBoard.board[i] === '') {
          if (gameBoard.getTurn() % 2 === 0) {
            gameBoard.board[i] = 'X';
          } else {
            gameBoard.board[i] = 'O';
          }
          gameBoard.addTurn();

          if (checkWinner(gameBoard.board) === 1) {
            container.classList.add('block');
            winnerup.innerHTML = `Congratulations ${playerOne.value} Wins`;
          } else if (
            checkWinner(gameBoard.board) === 0
            && gameBoard.getTurn() === 9
          ) {
            container.classList.add('block');
            winnerup.innerHTML = 'Nobody Wins';
          } else if (checkWinner(gameBoard.board) === 2) {
            container.classList.add('block');
            winnerup.innerHTML = `Congratulations ${playerTwo.value} Wins`;
          }

          render();
        }
      });
    }
    restartButton.addEventListener('click', () => restart());
    button.addEventListener('click', () => {
      restart();
      container.classList.remove('block');
    });
    startButton.addEventListener('click', () => {
      if (playerOne.value !== '' && playerTwo.value !== '') {
        createInput.classList.add('none');
        showName();
        boardContainer.classList.add('block');
      } else {
        errorForm.textContent = 'Please Enter the name of both player in order to start the game';
      }
    });
  };

  return { render, startListeners };
};

const game = () => {
  const display = displayController(gameBoard);
  display.startListeners();
};

game();
