var isPalindrome = function(s) {
  // 一左一右两个指针相向而行
  let left = 0, right = s.length-1;
  while (left < right) {
      if (s.charAt(left) !== s.charAt(right)) {
          return false;
      }
      left++;
      right--;
  }
  return true;
};

// leetcode 5 最长回文字符串
// https://leetcode.cn/problems/longest-palindromic-substring/
var longestPalindrome=function(s){
  var res="";
  for(var i=0;i<s.length;i++){
    // 以s[i]为中心的最长回文串
    var s1=palindrome(s,i,i);
    // 以s[i]和s[i+1]为中心的最长回文串
    // 回文串长度可能是奇数也可能是偶数
    var s2=palindrome(s,i,i+1);
    res=res.length>s1.length?res:s1;
    res=res.length>s2.length?res:s2;
  }

  return res;
}

function palindrome(s,left,right){
  while(left>=0 && right<s.length && s[left]==s[right]){
    left--;
    right++;
  }
  return s.substring(left+1,right)
}