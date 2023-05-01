// leetcode 51
// https://leetcode.cn/problems/n-queens/submissions/

var solveNQueens = function(n) {
  var res = [];

  // '.' 表示空，'Q' 表示皇后，初始化空棋盘。
  var board = new Array(n);
  for (var i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.');
  }

  backtrack(board, 0);

  return res;

  // 路径：board 中小于 row 的那些行都已经成功放置了皇后
  // 选择列表：第 row 行的所有列都是放置皇后的选择
  // 结束条件：row 超过 board 的最后一行
  function backtrack(board, row) {
    // 触发结束条件
    if (row === board.length) {
      res.push(Array.from(board, row => row.join('')));
      return;
    }

    var n = board.length;
    for (var col = 0; col < n; col++) {
      // 排除不合法选择
      if (!isValid(board, row, col)) {
        continue;
      }
      // 做选择
      board[row][col] = 'Q';
      // 进入下一行决策
      backtrack(board, row + 1);
      // 撤销选择
      board[row][col] = '.';
    }
  }

  /* 是否可以在 board[row][col] 放置皇后？*/
  function isValid(board, row, col) {
    var n = board.length;
    // 检查列是否有皇后互相冲突
    for (var i = 0; i <= row; i++) {
      if (board[i][col] === 'Q') {
        return false;
      }
    }
    // 检查右上方是否有皇后互相冲突
    for (var i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }
    // 检查左上方是否有皇后互相冲突
    for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }
    return true;
  }
};
// 详细解析参见：
// https://labuladong.github.io/article/?qno=51
