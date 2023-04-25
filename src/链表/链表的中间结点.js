// leetcode 876
// https://leetcode.cn/problems/middle-of-the-linked-list/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let slow=head;
  let fast=head;
  while(fast!==null && fast.next!==null){
      slow=slow.next;
      fast=fast.next.next;
  }
  return slow
};
