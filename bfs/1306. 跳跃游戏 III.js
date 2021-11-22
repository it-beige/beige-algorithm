const canReach = (arr, start) => {
  const visited = new Set();
  const queue = [start];
  for (let len = 0, max = arr.length; len < queue.length; ++len) {
    const idx = queue[len];
    if (visited.has(idx)) continue;
    if (arr[idx] === 0) return true;
    visited.add(idx);
    idx + arr[idx] < max && queue.push(idx + arr[idx]);
    idx - arr[idx] >= 0 && queue.push(idx - arr[idx]);
  }
  return false;
};