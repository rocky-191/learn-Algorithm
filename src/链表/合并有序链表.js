// leetcode 21
// https://leetcode.cn/problems/merge-two-sorted-lists/

var mergeTwoLists=function(l1,l2){
  var dummy=new ListNode(-1),p=dummy;
  var p1=l1,p2=l2;

  while(l1!==null && l2!==null){
    // 比较p1和p2两个指针
    // 比较值的大小
    if(p1.val>p2.val){
      p.next=p2;
      p2=p2.next;
    }else{
      p.next=p1;
      p1=p1.next;
    }
  }

  if(p1!==null){
    p.next=p1;
  }

  if(p2!==null){
    p.next=p2;
  }

  return dummy.next
}