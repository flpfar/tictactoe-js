const checkWinner = (board) => {
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
  for (let i = 0; i < chances.length; i += 1) {
    if (
      board[chances[i][0]] === 'X'
      && board[chances[i][1]] === 'X'
      && board[chances[i][2]] === 'X'
    ) {
      return 1;
    }
    if (
      board[chances[i][0]] === 'O'
      && board[chances[i][1]] === 'O'
      && board[chances[i][2]] === 'O'
    ) {
      return 2;
    }
  }
  return 0;
};

export default checkWinner;
