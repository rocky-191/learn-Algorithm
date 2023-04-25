// leetcode 160
// https://leetcode.cn/problems/intersection-of-two-linked-lists/

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let p1 = headA, p2 = headB;
  while (p1 !== p2) {
      if (p1 === null) 
      {
        p1 = headB;
      } else {
        p1 = p1.next;
      }

      if (p2 === null) {
        p2 = headA;
      } else {
        p2 = p2.next;
      }
  }

  return p1
};

// https://labuladong.github.io/algo/di-ling-zh-bfe1b/shuang-zhi-0f7cc/
// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码还未经过力扣测试，仅供参考，如有疑惑，可以参照我写的 java 代码对比查看。

var getIntersectionNode = function(headA, headB) {
  let lenA = 0, lenB = 0;
  // 计算两条链表的长度
  for (let p1 = headA; p1 !== null; p1 = p1.next) {
      lenA++;
  }
  for (let p2 = headB; p2 !== null; p2 = p2.next) {
      lenB++;
  }
  // 让 p1 和 p2 到达尾部的距离相同
  let p1 = headA, p2 = headB;
  if (lenA > lenB) {
      for (let i = 0; i < lenA - lenB; i++) {
          p1 = p1.next;
      }
  } else {
      for (let i = 0; i < lenB - lenA; i++) {
          p2 = p2.next;
      }
  }
  // 看两个指针是否会相同，p1 == p2 时有两种情况：
  // 1、要么是两条链表不相交，他俩同时走到尾部空指针
  // 2、要么是两条链表相交，他俩走到两条链表的相交点
  while (p1 !== p2) {
      p1 = p1.next;
      p2 = p2.next;
  }
  return p1;
};
