const gameBoard = (() => {
  const gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return {
    gameboard,
  };
})();

function player(name, char, arr) {
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
  const winner = () => {
    return chances.some((chance) => chance.every((num) => arr.includes(num)));
  };
  //x=[];o=[];
  //player1=player("sam",'X',x);
  //player2=player('jask','O',o);
  ele.textContent=player.char;
//if(Char=="X") playe1.x.push(indexOf('X)
// )
// char='O'
//if(char==='o') player2.arr.push(grid.indexof())
//char='x

  return {
    name,
    char,
    arr,
    winner,
  };
}

const displayController = (() => {
  const boardGrid = document.querySelector(".board-grid");
  const boardItems = document.querySelectorAll(".item");
  const render = () => {
    let i = 0;
  };
  return { render };
})();

const user = (name) => {
  return { name };
};

displayController.render();
