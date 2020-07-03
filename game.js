function player(name, arr) {
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
  const winner = (arr) => chances.some((chance) => chance.every((num) => arr.includes(num)));

  return {
    name,
    arr,
    winner,
  };
}

const startGame = () => {
  const startButton = document.querySelector('.start-button');
  const createInput = document.querySelector('.create-input');
  const playerOne = document.getElementById('player1');
  const playerTwo = document.getElementById('player2');
  const errorForm = document.querySelector('.error-form');

  const displayController = (() => {
    const boardContainer = document.querySelector('.board-container');
    const boardItems = document.querySelectorAll('.item');

    const container = document.querySelector('.container-1');
    const winnerup = document.querySelector('.winner');
    const button = document.querySelector('.button');
    const playerOneName = document.querySelector('.player1-name');
    const playerTwoName = document.querySelector('.player2-name');
    const restartButton = document.querySelector('.restart-button');

    let turn = 1;

    const restart = (player1, player2) => {
      const boardItems = document.querySelectorAll('.item');
      for (let i = 0; i < boardItems.length; i += 1) {
        boardItems[i].innerHTML = '';
      }
      player1.arr = [];
      player2.arr = [];
      turn = 1;
    };

    const render = (player1, player2) => {
      boardContainer.classList.add('block');
      playerOneName.textContent = player1.name;
      playerTwoName.textContent = player2.name;

      restartButton.addEventListener('click', () => restart(player1, player2));
      button.addEventListener('click', () => {
        restart(player1, player2, turn);
        container.classList.remove('block');
      });
      /* eslint-disable no-loop-func, no-alert */
      for (let i = 0; i < boardItems.length; i += 1) {
        boardItems[i].addEventListener('click', () => {
          if (boardItems[i].innerHTML !== '') {
            alert('invalid move!');
          } else {
            if (turn === 9) {
              container.classList.add('block');
              winnerup.innerHTML = 'NoBody Wins';
            }
            if (turn % 2 !== 0) {
              boardItems[i].innerHTML = '<div class="text-red-500"><i class="fas fa-dog"></i></div>';
              player1.arr.push(i);
              turn += 1;
              if (player1.winner(player1.arr)) {
                container.classList.add('block');
                winnerup.innerHTML = `Congratulations ${player1.name} Wins`;
              }
            } else {
              boardItems[i].innerHTML = '<div class="text-white"><i class="fas fa-cat"></i></div>';
              player2.arr.push(i);
              turn += 1;
              if (player2.winner(player2.arr)) {
                container.classList.add('block');
                winnerup.innerHTML = `Congratulations ${player2.name} Wins`;
              }
            }
          }
        });
        /* eslint-enable no-loop-func , no-alert */
      }
    };
    return { render };
  })();

  const start = () => {
    const player1 = player(playerOne.value, []);
    const player2 = player(playerTwo.value, []);

    createInput.classList.add('none');
    displayController.render(player1, player2);
  };
  startButton.addEventListener('click', () => {
    if (playerOne.value !== '' && playerTwo.value !== '') {
      start();
    } else {
      errorForm.textContent = 'Please Enter the name of both player in order to start the game';
    }
  });
};

startGame();
