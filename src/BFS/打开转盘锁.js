// leetcode 752
// https://leetcode.cn/problems/open-the-lock/
// 参考：https://labuladong.github.io/algo/di-ling-zh-bfe1b/bfs-suan-f-463fd/
var openLock = function(deadends, target) {
  // 记录需要跳过的死亡密码
  let deads = new Set(deadends);
  // 记录已经穷举过的密码，防止走回头路
  let visited = new Set();
  let q = [];
  // 从起点开始启动广度优先搜索
  let step = 0;
  q.push("0000");
  visited.add("0000");
  
  while (q.length > 0) {
      let sz = q.length;
      /* 将当前队列中的所有节点向周围扩散 */
      for (let i = 0; i < sz; i++) {
          let cur = q.shift();
          
          /* 判断是否到达终点 */
          if (deads.has(cur))
              continue;
          if (cur === target)
              return step;
          
          /* 将一个节点的未遍历相邻节点加入队列 */
          for (let j = 0; j < 4; j++) {
              let up = plusOne(cur, j);
              if (!visited.has(up)) {
                  q.push(up);
                  visited.add(up);
              }
              let down = minusOne(cur, j);
              if (!visited.has(down)) {
                  q.push(down);
                  visited.add(down);
              }
          }
      }
      /* 在这里增加步数 */
      step++;
  }
  // 如果穷举完都没找到目标密码，那就是找不到了
  return -1;
}

function plusOne(s, j) {
  let arr = s.split("");
  if (arr[j] === '9')
      arr[j] = '0';
  else
      arr[j] = (parseInt(arr[j]) + 1).toString();
  return arr.join("");
}

function minusOne(s, j) {
  let arr = s.split("");
  if (arr[j] === '0')
      arr[j] = '9';
  else
      arr[j] = (parseInt(arr[j]) - 1).toString();
  return arr.join("");
}
