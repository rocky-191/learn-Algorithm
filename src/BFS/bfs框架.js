var BFS = function(start, target) {
  var q = []; // 核心数据结构
  var visited = new Set(); // 避免走回头路
  
  q.push(start); // 将起点加入队列
  visited.add(start);
  var step = 0; // 记录扩散的步数

  while (q.length != 0) {
      var sz = q.length;
      /* 将当前队列中的所有节点向四周扩散 */
      for (var i = 0; i < sz; i++) {
          var cur = q.shift();
          /* 划重点：这里判断是否到达终点 */
          if (cur === target)
              return step;
          /* 将 cur 的相邻节点加入队列 */
          for (var x in cur.adj()) {
              if (!visited.has(x)) {
                  q.push(x);
                  visited.add(x);
              }
          }
      }
      /* 划重点：更新步数在这里 */
      step++;
  }
};
