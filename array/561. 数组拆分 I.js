/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let min = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i]
    }
    if (max < nums[i]) {
      max = nums[i]
    }
  }
  let rangeLen = max - min + 1;
  let temp = new Array(rangeLen)
  for (let v of nums) {
    let k = v - min; if (temp[k]) {
      temp[k]++
    } else {
      temp[k] = 1
    }
  }
  let sum = 0;
  let eliminate = 0;
  for (let i = 0; i < rangeLen; i++) {
    if (temp[i]) {
      let origin = i + min;
      sum += ((temp[i] - eliminate + 1) >> 1) * origin;
      eliminate = (temp[i] - eliminate) % 2
    }
  }
  return sum;
};