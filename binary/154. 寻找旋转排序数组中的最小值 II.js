/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0
  let r = nums.length - 1

  while (l < r) {
    let mid = l + ((r - l) >> 1)
    if (nums[mid] > nums[r]) {
      l = mid + 1
    } else if (nums[mid] < nums[r]) {
      r = mid
    } else {
      r -= 1
    }
  }
  return nums[r]
};