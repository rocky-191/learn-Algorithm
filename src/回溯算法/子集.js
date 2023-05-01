// leetcode 78
// https://leetcode.cn/problems/subsets/

function subsets(nums) {
  let res=[];
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
