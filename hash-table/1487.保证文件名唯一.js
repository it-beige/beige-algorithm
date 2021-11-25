/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
  let nameHash = {}
  let ans = []

  for (let name of names) {
    let s = name

    while (s in nameHash) {
      s = name + '(' + nameHash[name] + ')'
      nameHash[name] += 1
    }
    ans.push(s)
    nameHash[s] = 1
  }
  return ans
};