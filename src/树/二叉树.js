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

// leetcode 105 构造二叉树
// https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

/**
 * 存储 inorder 中值到索引的映射
 */
let valToIndex = new Map();

/**
 * 定义：前序遍历数组为 preorder[preStart..preEnd]，
 * 中序遍历数组为 inorder[inStart..inEnd]，
 * 构造这个二叉树并返回该二叉树的根节点
 */
function build(preorder, preStart, preEnd, inorder, inStart, inEnd) {
  if (preStart > preEnd) {
    return null;
  }

  // root 节点对应的值就是前序遍历数组的第一个元素
  const rootVal = preorder[preStart];
  // rootVal 在中序遍历数组中的索引
  const index = valToIndex.get(rootVal);

  const leftSize = index - inStart;

  // 先构造出当前根节点
  const root = new TreeNode(rootVal);

  // 递归构造左右子树
  root.left = build(
    preorder,
    preStart + 1,
    preStart + leftSize,
    inorder,
    inStart,
    index - 1
  );

  root.right = build(
    preorder,
    preStart + leftSize + 1,
    preEnd,
    inorder,
    index + 1,
    inEnd
  );
  return root;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  for (let i = 0; i < inorder.length; i++) {
    valToIndex.set(inorder[i], i);
  }
  return build(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1
  );
};
// 详细解析参见：
// https://labuladong.github.io/article/?qno=105


// leetcode 230 寻找二叉搜索树中第k小的元素
// https://leetcode.cn/problems/kth-smallest-element-in-a-bst/
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function(root, k) {
  var res=0;
  var rank=0;
  function traverse(root,k){
      if(root==null) return;

      traverse(root.left,k);
      // 中序遍历
      rank++;
      if(k===rank){
          res=root.val;
          return;
      }
      traverse(root.right,k)
  }

  traverse(root,k);
  return res;
};

// leetcode 543 二叉树的直径
// https://leetcode.cn/problems/diameter-of-binary-tree/

/**
 * 记录最大直径的长度
 * @param {TreeNode} root 
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let maxDiameter = 0;
  /**
   * 递归获取深度
   * @param {TreeNode} root 
   * @return {number}
   */
  const maxDepth = function(root) {
      if (root === null) {
          return 0;
      }
      let leftMax = maxDepth(root.left);
      let rightMax = maxDepth(root.right);
      // 后序位置，顺便计算最大直径
      let myDiameter = leftMax + rightMax;
      maxDiameter = Math.max(maxDiameter, myDiameter);
      return 1 + Math.max(leftMax, rightMax);
  }
  maxDepth(root);
  return maxDiameter;
};


// https://labuladong.github.io/algo/di-ling-zh-bfe1b/dong-ge-da-334dd/
// 层序遍历
// 输入一棵二叉树的根节点，层序遍历这棵二叉树
function levelTraverse(root) {
  if (root == null) return;
  var q = new LinkedList();
  q.offer(root);

  // 从上到下遍历二叉树的每一层
  while (!q.isEmpty()) {
      var sz = q.size();
      // 从左到右遍历每一层的每个节点
      for (var i = 0; i < sz; i++) {
          var cur = q.poll();
          // 将下一层节点放入队列
          if (cur.left != null) {
              q.offer(cur.left);
          }
          if (cur.right != null) {
              q.offer(cur.right);
          }
      }
  }
}

// 另一种思路
var levelTraverse = function(root) {
  const res = [];
  traverse(root, 0);
  return res;
  
  // 遍历二叉树的每一层，将每层结点的值存储到 res 中
  function traverse(root, depth) {
      if (!root) {
          return;
      }
      // 当前层数还未被存储过，则初始化对应层的数组
      if (res.length <= depth) {
          res.push([]);
      }
      // 将节点值存储到对应的层数中
      res[depth].push(root.val);
      // 递归遍历左右子节点
      traverse(root.left, depth + 1);
      traverse(root.right, depth + 1);
  }
};


// leetcode 111 二叉树的最小深度
// https://leetcode.cn/problems/minimum-depth-of-binary-tree/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth1 = function(root) {
  if(root===null) return 0;
  if(!root.left) return 1+minDepth1(root.right);
  if(!root.right) return 1+minDepth1(root.left);

  const lm=minDepth1(root.left),rm=minDepth1(root.right);
  return 1+Math.min(lm,rm)
};

// 解法2
var minDepth2 = function(root) {
  if(!root){
      return 0;
  }
  let q = [root];
  let depth = 1;
  while (q.length > 0){
      let size = q.length;
      /* 将当前队列中的所有节点向四周扩散 */
      for(let i=0;i<size;i++){
          let cur = q.shift();
          /* 判断是否到达终点 */
          if (cur.left === null && cur.right === null) {
              return depth;
          }
          /* 将 cur 的相邻节点加入队列 */
          if (cur.left !== null){
              q.push(cur.left);
          }
          if (cur.right !== null){
              q.push(cur.right);
          }
      }
      /* 这里增加步数 */
      depth++;
  }
  return depth;
}
