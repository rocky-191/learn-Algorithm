// leetcode 26
// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // 快慢指针
  if(nums.length===0) return 0;
  let slow=0,fast=0;
  while(fast<nums.length){
      if(nums[slow]!==nums[fast]){
          slow++;
          nums[slow]=nums[fast]
      }
      fast++;
  }
  // 数组长度为索引项+1
  return slow+1;
};

// leetcode 83 删除链表重复元素
// https://leetcode.cn/problems/remove-duplicates-from-sorted-list/
var deleteDuplicates = function(head) {
  if (head === null) return null;
  let slow = head, fast = head;
  while (fast !== null) {
      if (fast.val !== slow.val) {
          // nums[slow] = nums[fast];
          slow.next = fast;
          // slow++;
          slow = slow.next;
      }
      // fast++
      fast = fast.next;
  }
  // 断开与后面重复元素的连接
  slow.next = null;
  return head;
};

// leetcode 27
// https://leetcode.cn/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement1 = function(nums, val) {
  for(let i=0,len=nums.length;i<len;i++){
      if(nums[i]==val){
          nums.splice(i,1);
          i--
      }
  }
  return nums.length
};
// 解法2 快慢指针
var removeElement2 = function(nums, val) {
  var fast = 0, slow = 0;
  while (fast < nums.length) {
      if (nums[fast] != val) {
          nums[slow] = nums[fast];
          slow++;
      }
      fast++;
  }
  return slow;
}

// leetcode 283
// https://leetcode.cn/problems/move-zeroes/
// 去除 nums 中的所有 0，返回不含 0 的数组长度
var removeElement = function(nums, val) {
  var i = 0;
  for (var j = 0; j < nums.length; j++) {
      if (nums[j] !== val) {
          nums[i] = nums[j];
          i++;
      }
  }
  return i;
};

var moveZeroes = function(nums) {
  // 去除 nums 中的所有 0，返回不含 0 的数组长度
  var p = removeElement(nums, 0);
  // 将 nums[p..] 的元素赋值为 0
  for (; p < nums.length; p++) {
      nums[p] = 0;
  }
};