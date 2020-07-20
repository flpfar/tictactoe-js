import checkWinner from '../src/check-winner';

describe('check-winner', () => {
  test('should return  one if X wins', () => {
    expect(checkWinner(['X', 'O', '', '', 'X', 'O', '', '', 'X'])).toBe(1);
  });
  test('should return two if O wins', () => {
    expect(checkWinner(['', 'X', 'O', 'X', 'O', 'X', 'O', '', ''])).toBe(2);
  });
  test('should return zero if nobody wins', () => {
    expect(checkWinner(['O', 'X', 'X', 'X', 'O', 'O', 'X', 'O', 'X'])).toBe(0);
  });
  test('should return zero if there is no moves', () => {
    expect(checkWinner(new Array(9).fill(''))).toBe(0);
  });
});
