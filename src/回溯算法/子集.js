// leetcode 78
// https://leetcode.cn/problems/subsets/

function subsets(nums) {
  const res=[];
  const track=[];

  function backtrack(start){
    res.push([...track]);

    for(let i=start;i<nums.length;i++){
      track.push(nums[i])
      backtrack(i+1);
      track.pop();
    }
  }
  backtrack(0);
  return res;
}


// leetcode 90
// https://leetcode.cn/problems/subsets-ii/
// 存在重复元素
var subsetsWithDup = function(nums) {
  // 定义结果数组和回溯时的路径数组
  let res = [];
  let track = [];

  // 排序，以便于剪枝算法的实现
  nums.sort((a, b) => a - b); // 让相同元素埃着

  // 回溯算法
  const backtrack = (nums, start) => {
      // 前序位置，每个节点的值都是一个子集
      res.push([...track]);

      // 遍历子集树枝
      for (let i = start; i < nums.length; i++) {
          // 剪枝逻辑，值相同的相邻树枝，只遍历第一条
          if (i > start && nums[i] === nums[i - 1]) {
              continue;
          }
          // 选择当前元素，加入路径数组
          track.push(nums[i]);
          // 向子节点递归
          backtrack(nums, i + 1);
          // 回溯，撤销选择
          track.pop();
      }
  }

  backtrack(nums, 0);
  return res;
};