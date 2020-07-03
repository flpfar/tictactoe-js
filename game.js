const gameBoard = (() => {
  const gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return {
    gameboard,
  };
})();

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
  const winner = (arr) => {
    return chances.some((chance) => chance.every((num) => arr.includes(num)));
  };

  return {
    name,
    arr,
    winner,
  };
}

const container = document.querySelector(".container-1");
const winnerup = document.querySelector(".winner");
const button = document.querySelector(".button");
const player1 = player("player1", []);
const player2 = player("player2", []);

const displayController = (() => {
  const boardGrid = document.querySelector(".board-grid");
  const boardItems = document.querySelectorAll(".item");
  const newWindow = () => {
    window.location.reload();
  };

  button.addEventListener("click", function () {
    newWindow();
  });
  const render = () => {
    let turn = 1;
    for (let i = 0; i < boardItems.length; i++) {
      boardItems[i].addEventListener("click", () => {
        if (turn === 9) {
          container.classList.add("block");
          winnerup.innerHTML = "NoBody Wins";
        }

        if (boardItems[i].innerHTML != "") {
          alert("invalid move!");
        } else {
          if (turn % 2 !== 0) {
            boardItems[i].innerHTML =
              '<div class="text-red-500"><i class="fas fa-dog"></i></div>';
            player1.arr.push(i);
            turn += 1;
            if (player1.winner(player1.arr)) {
              container.classList.add("block");
              winnerup.innerHTML = "Player 1 Wins";
            }
          } else {
            boardItems[i].innerHTML =
              '<div class="text-white"><i class="fas fa-cat"></i></div>';
            player2.arr.push(i);
            turn += 1;
            if (player2.winner(player2.arr)) {
              container.classList.add("block");
              winnerup.innerHTML = "Player 2 Wins";
            }
          }
        }
        console.log(turn);
      });
    }
  };
  return { render };
})();

const user = (name) => {
  return { name };
};

displayController.render();
