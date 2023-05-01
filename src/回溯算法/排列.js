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


// leetcode 47 全排列
// https://leetcode.cn/problems/permutations-ii/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let res = [];
  let track = [];
  let used = new Array(nums.length).fill(false);

  // 先排序，让相同的元素靠在一起
  nums.sort((a, b) => a - b);
  backtrack(nums, used, track, res);

  return res;
};

/**
* @param {number[]} nums
* @param {boolean[]} used
* @param {number[]} track
* @param {number[][]} res
*/
function backtrack(nums, used, track, res) {
  if (track.length === nums.length) {
      res.push(track.slice());
      return;
  }

  for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
          continue;
      }
      // 新添加的剪枝逻辑，固定相同的元素在排列中的相对位置
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
          continue;
      }
      track.push(nums[i]);
      used[i] = true;
      backtrack(nums, used, track, res);
      track.pop();
      used[i] = false;
  }
}
