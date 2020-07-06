/* eslint-disable */

const gameboard = (() => {
  const arr = new Array(9).fill('');
  const boardContainer = document.querySelector('.board-container');
  const boardItems = document.querySelectorAll('.item');
  turn = 0;
  for (let i = 0; i < boardItems.length; i++) {
    boardItems[i].addEventListener('click', function () {
      console.log(arr);
      if (arr[i] === '') {
          if(turn%2===0)
          {
              arr[i]='X';
              boardItems[i].innerHTML = '<div class="text-red-500"><i class="fas fa-dog"></i></div>';
          }
          else{
              arr[i]='O';
              boardItems[i].innerHTML = '<div class="text-white"><i class="fas fa-cat"></i></div>'
          }
          turn++;
      }
    });
  }
})();

gameboard;
