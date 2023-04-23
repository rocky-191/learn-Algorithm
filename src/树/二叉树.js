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
