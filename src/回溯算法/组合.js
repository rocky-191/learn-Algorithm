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
