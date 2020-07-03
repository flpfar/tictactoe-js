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

const player1 = player('player1', [])
const player2 = player('player2', [])


const displayController = (() => {
  const boardGrid = document.querySelector(".board-grid");
  const boardItems = document.querySelectorAll(".item");
  const render = () => {
    let turn = 1;
    for(let i = 0; i < boardItems.length; i++) {
      boardItems[i].addEventListener('click', () => {
        if(boardItems[i].innerHTML != ''){
          alert('invalid move!')
        }else{
          if(turn == 1){
            boardItems[i].innerHTML = 'X';
            player1.arr.push(i);
            turn = 2;
            if(player1.winner(player1.arr)){
              boardGrid.innerHTML = 'PLAYER1 WINS';
            }
          } else {
            boardItems[i].innerHTML = 'O';
            player2.arr.push(i);
            turn = 1;
            if(player2.winner(player2.arr)){
              boardGrid.innerHTML = 'PLAYER2 WINS';
            }
          }
        }
      })
    }
  };
  return { render };
})();

const user = (name) => {
  return { name };
};

displayController.render();
