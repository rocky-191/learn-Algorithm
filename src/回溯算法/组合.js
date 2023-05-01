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


// leetcode 39 组合总和
// https://leetcode.cn/problems/combination-sum/
// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码还未经过力扣测试，仅供参考，如有疑惑，可以参照我写的 java 代码对比查看。

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  // 记录结果
  var res = [];
  // 记录回溯的路径
  var track = [];
  // 记录 track 中的路径和
  var trackSum = 0;

  // 回溯算法主函数
  function backtrack(nums, start, target) {
      // base case，找到目标和，记录结果
      if (trackSum === target) {
          res.push([...track]);
          return;
      }
      // base case，超过目标和，停止向下遍历
      if (trackSum > target) {
          return;
      }

      // 回溯算法标准框架
      for (var i = start; i < nums.length; i++) {
          // 选择 nums[i]
          trackSum += nums[i];
          track.push(nums[i]);
          // 递归遍历下一层回溯树
          // 同一元素可重复使用，注意参数
          backtrack(nums, i, target);
          // 撤销选择 nums[i]
          trackSum -= nums[i];
          track.pop();
      }
  }

  if (candidates.length === 0) {
      return res;
  }
  backtrack(candidates, 0, target);
  return res;
};
