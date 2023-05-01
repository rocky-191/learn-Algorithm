// leetcode 77
// https://leetcode.cn/problems/combinations/

var combine = function (n, k) {
  const res=[];
  const track=[];

  function backtrack(start,n,k){
    if(k===track.length){
      res.push([...track]);
      return
    }

    for(let i=start;i<=n;i++){
      track.push(i)
      backtrack(i+1,n,k);
      track.pop();
    }
  }
  backtrack(1,n,k);
  return res;
};

// leetcode 40
// https://leetcode.cn/problems/combination-sum-ii/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let res = [];
  let track = [];
  let trackSum = 0;
  let sortedCandidates = candidates.sort((a, b) => a - b); // 排序
  
  // 回溯函数
  const backtrack = (nums, start, target) => {
      // 达到目标和，找到符合条件的组合，记录结果
      if (trackSum === target) {
          res.push([...track]);
          return;
      }
      // 先剪枝，超过目标和，直接结束
      if (trackSum > target) {
          return;
      }
      // 回溯算法标准框架
      for (let i = start; i < nums.length; i++) {
          // 剪枝逻辑，值相同的树枝，只遍历第一条
          if (i > start && nums[i] === nums[i - 1]) {
              continue;
          }
          // 做选择
          track.push(nums[i]);
          trackSum += nums[i];
          // 递归遍历下一层回溯树
          backtrack(nums, i + 1, target);
          // 撤销选择
          track.pop();
          trackSum -= nums[i];
      }
  }

  backtrack(sortedCandidates, 0, target);
  return res;
};