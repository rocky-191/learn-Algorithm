function hasCycle(head) {
  // 快慢指针初始化指向 head
  var slow = head, fast = head;
  // 快指针走到末尾时停止
  while (fast != null && fast.next != null) {
      // 慢指针走一步，快指针走两步
      slow = slow.next;
      fast = fast.next.next;
      // 快慢指针相遇，说明含有环
      if (slow == fast) {
          return true;
      }
  }
  // 不包含环
  return false;
}

// 寻找环的节点

var detectCycle = function(head) {
  var fast, slow;
  fast = slow = head;
  while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast == slow) break;
  }
  // 上面的代码类似 hasCycle 函数
  if (fast == null || fast.next == null) {
      // fast 遇到空指针说明没有环
      return null;
  }

  // 重新指向头结点
  slow = head;
  // 快慢指针同步前进，相交点就是环起点
  while (slow != fast) {
      fast = fast.next;
      slow = slow.next;
  }
  return slow;
};
