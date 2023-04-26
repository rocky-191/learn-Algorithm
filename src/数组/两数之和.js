// leetcode 167 双指针思想
// https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/
var twoSum=function(nums,target){
  var left=0,right=nums.length-1;
  while(left<right){
    var sum=nums[left]+nums[right];
    if(sum===target){
      // 题目要求索引从1开始
      return [left+1,right+1]
    }else if(sum<target){
      left++;
    }else if(sum>target){
      right--;
    }
  }

  return [-1,-1];
}