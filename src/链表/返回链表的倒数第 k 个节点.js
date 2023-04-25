// 返回链表的倒数第 k 个节点
var findFromEnd = function(head, k) {
  var p1 = head;
  // p1 先走 k 步
  for (var i = 0; i < k; i++) {
      p1 = p1.next;
  }
  var p2 = head;
  // p1 和 p2 同时走 n - k 步
  while (p1 != null) {
      p2 = p2.next;
      p1 = p1.next;
  }
  // p2 现在指向第 n - k + 1 个节点，即倒数第 k 个节点
  return p2;
};





// leetcode 19 删除虚拟链表的倒数第n个节点
// https://leetcode.cn/problems/remove-nth-node-from-end-of-list/

var removeNthFromEnd = function(head, n) {
  // 虚拟头结点
  let dummy = new ListNode(-1);
  dummy.next = head;
  // 删除倒数第 n 个，要先找倒数第 n + 1 个节点
  let x = findFromEnd(dummy, n + 1);
  // 删掉倒数第 n 个节点
  x.next = x.next.next;
  return dummy.next;
};

// 返回链表的倒数第 k 个节点
var findFromEnd = function(head, k) {
  let p1 = head;
  // p1 先走 k 步
  for (let i = 0; i < k; i++) {
      p1 = p1.next;
  }
  let p2 = head;
  // p1 和 p2 同时走 n - k 步
  while (p1 != null) {
      p2 = p2.next;
      p1 = p1.next;
  }
  // p2 现在指向第 n - k 个节点
  return p2;
};
