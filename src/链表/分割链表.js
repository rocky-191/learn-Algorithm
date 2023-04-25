// leetcode 86
// https://leetcode.cn/problems/partition-list/
var partition = function(head, x) {
  let dummy1=new ListNode(-1);// 存放小于x的链表节点
  let dummy2=new ListNode(-1);// 存放大于x的链表节点
  let p1=dummy1,p2=dummy2;
  let p=head;
  while(p!==null){
      if(p.val>=x){
          p2.next=p;
          p2=p2.next;
      }else{
          p1.next=p;
          p1=p1.next;
      }
      // 断开原链表中诶个节点的next指针
      let temp=p.next;
      p.next=null;
      p=temp;
  }
  p1.next=dummy2.next;
  return dummy1.next;
};