/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ans = []
  const dfs = (idx, target, temp = []) => {
    if (idx === candidates.length) return
    if (target < 0) return
    if (target === 0) {
      ans.push([...temp])
      temp = []
    }
    temp.push(candidates[idx])
    dfs(idx, target - candidates[idx], temp)

    temp.pop()
    dfs(idx + 1, target, temp)
  }
  dfs(0, target)
  return ans
};

combinationSum([2, 3, 6, 7], 7)