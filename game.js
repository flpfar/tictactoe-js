const gameBoard = (() => {
  const gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return {
    gameboard,
  };
})();

const displayController = (() => {
  const boardGrid = document.querySelector('.board-grid');
  const boardItems = document.querySelectorAll('.item');
  const render = () => {
    let i = 0;
    while (i < 8) {
      if (i % 2 === 0) {
        boardItems[i].addEventListener('click', () => {
          boardItems[i].textContent = 'X';
          i += 1;
        });
      } else {
        boardItems[i].addEventListener('click', () => {
          boardItems[i].textContent = 'O';
          i += 1;
        });
      }
    }
  };
  return { render };
})();

const user = (name) => {
  return { name };
};

displayController.render();
