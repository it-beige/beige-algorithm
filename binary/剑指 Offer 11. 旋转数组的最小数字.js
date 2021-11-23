/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let l = 0
  let r = numbers.length - 1

  while (l < r) {
    let mid = l + ((r - l) >> 1)
    if (numbers[mid] > numbers[r]) {
      l = mid + 1
    } else if (numbers[mid] < numbers[r]) {
      r = mid
    } else {
      r -= 1
    }
  }
  return numbers[r]
};