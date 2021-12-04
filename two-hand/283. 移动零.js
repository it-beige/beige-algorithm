var moveZeroes = function (nums) {
  let left = 0
  let right = 0
  let len = nums.length
  while (right < len) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
    }
    right++
  } return nums
};