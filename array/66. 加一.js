/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 找到当前数组的最后一个元素的下标 
  let index = digits.length - 1;
  // 进入递归，传入数组，和数组的倒数第一个数
  addOne(digits, index); return digits;
};
function addOne(arr, index) {
  if (index === -1) return arr.unshift(1);
  if (arr[index] + 1 === 10) {
    arr[index] = 0;
    addOne(arr, index - 1)
  } else {
    arr[index] += 1; return arr;
  }
}