const gameBoard = (() => {
  const gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return {
    gameboard
  }
})();

const displayController = (() => {
  const boardGrid = document.querySelector('.board-grid');
  const boardItems = document.querySelectorAll('.item');
  const render = () => {
    for(let i = 0; i < boardItems.length; i++){
      boardItems.addEventListener('click', () => {
        boardItems[i].textContent = 'X'
      })
      boardItems[i].innerHTML = gameBoard.gameboard[i];
    }
  }
  return {render}
})();

const user = (name) => {
  return { name };
};

displayController.render();