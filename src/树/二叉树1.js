// 求二叉树最大深度
var maxDepth=funciton(root){
  if(root==null) return 0;
  let leftMax=maxDepth(root.left);
  let rightMax=maxDepth(root.right);
  let res=Math.max(leftMax,rightMax)+1;
  return res;
}

// 输入一颗二叉树的根节点，层序遍历二叉树
var levelTraverse=function(root){
  if(root==null) return 0;
  var q=[];
  q.push(root)

  var depth=1;
  while(q.length>0){
    var sz=q.length;
    for(var i=0;i<sz;i++){
      var cur=q.shift();
      if(cur.left!==null){
        q.push(cur.left)
      }
      if(cur.right!==null){
        q.push(cur.right)
      }
    }
    depth++
  }
}