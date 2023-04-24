// leetcode 415
// https://leetcode.cn/problems/add-strings/
var addStrings=(num1,num2)=>{
  let i=num1.length-1;
  let j=num2.length-1;

  const res=[];
  let carry=0;
  while(i>=0 || j>=0){
    const n1=i>=0?Number(num1[i]):0;
    const n2=j>=0?Number(num2[j]):0;
    const sum=n1+n2+carry;

    res.unshift(sum%10);
    carry=Math.floor(sum/10);
    i--;
    j--;
  }
  if(carry){
    res.unshift(carry);
  }
  return res.join("")
}

function isEqual(a, b, sum) {
  const [intStr1, deciStr1] = a.toString().split(".");
  const [intStr2, deciStr2] = b.toString().split(".");
  const inteSum = addStrings(intStr1, intStr2); // 获取整数相加部分
  const deciSum = addStrings(deciStr1, deciStr2); // 获取小数相加部分
  return inteSum + "." + deciSum === String(sum);
}