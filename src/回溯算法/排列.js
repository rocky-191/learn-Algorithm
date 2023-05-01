// leetcode 46
// https://leetcode.cn/problems/permutations/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let list=[];
  backtrack(list,[],nums)
  return list
};

function backtrack(list,temp,nums){
  if(temp.length===nums.length){
      return list.push([...temp])
  }
  for(let i=0;i<nums.length;i++){
      if(temp.includes(nums[i])) continue
      temp.push(nums[i])
      backtrack(list,temp,nums)
      temp.pop()
  }
}


// 解法2
var permute = function(nums) {
  let res = [];
  let track = [];
  let used = new Array(nums.length).fill(false);
  // 路径：记录在 track 中
  // 选择列表：nums 中不存在于 track 的那些元素（used[i] 为 false）
  // 结束条件：nums 中的元素全都在 track 中出现
  const backtrack = (nums, track, used) => {
      // 触发结束条件
      if (track.length === nums.length) {
          res.push([...track]);
          return;
      }

      for (let i = 0; i < nums.length; i++) {
          // 排除不合法的选择
          if (used[i]) {
              // nums[i] 已经在 track 中，跳过
              continue;
          }
          // 做选择
          track.push(nums[i]);
          used[i] = true;
          // 进入下一层决策树
          backtrack(nums, track, used);
          // 取消选择
          track.pop();
          used[i] = false;
      }
  }
  backtrack(nums, track, used);
  return res;
}
// 详细解析参见：
// https://labuladong.github.io/article/?qno=46
