var fib1 = function(N) {
  if (N === 0) return 0;
  let dp = new Array(N + 1).fill(0);
  // base case
  dp[0] = 0; dp[1] = 1;
  // 状态转移
  for (let i = 2; i <= N; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[N];
};

// 解法2
var fib2 = function(n) {
  if (n === 0 || n === 1) {
      // base case
      return n;
  }
  // 分别代表 dp[i - 1] 和 dp[i - 2]
  let dp_i_1 = 1, dp_i_2 = 0;
  for (let i = 2; i <= n; i++) {
      // dp[i] = dp[i - 1] + dp[i - 2];
      let dp_i = dp_i_1 + dp_i_2;
      // 滚动更新
      dp_i_2 = dp_i_1;
      dp_i_1 = dp_i;
  }
  return dp_i_1;
};
