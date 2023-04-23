// leetcode 124 求二叉树中最大路径和
// https://leetcode.cn/problems/binary-tree-maximum-path-sum/
var maxPathSum = function(root) {
  let res=-Infinity;
  function oneSideMax(node){
      if(node==null) return 0;
      let left=Math.max(0,oneSideMax(node.left));
      let right=Math.max(0,oneSideMax(node.right));
      // 后序位置
      res=Math.max(res,left+node.val+right);
      return Math.max(left,right)+node.val
  }   
  oneSideMax(root)
  return res;
};