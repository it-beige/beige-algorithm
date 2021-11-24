/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  let set = new Set()
  if (s.length === 1) return [s]
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    let optChar = s.slice(0, i) + s.slice(i + 1, s.length)
    let rest = permutation(optChar)
    for (let j = 0; j < rest.length; j++) {
      set.add(char + rest[j])
    }
  }
  return [...set]
};

permutation("aab")