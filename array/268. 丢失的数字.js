/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length;
  let dis = (1 + n) * n / 2;
  for (let i = 0; i < n; i++) {
    dis = dis - nums[i];
  }
  return dis;
};