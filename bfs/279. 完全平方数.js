var numSquares = function (n) {
  // let sqr = ~~Math.sqrt(n);
  let neighbor = [];
  let queue = new Set([0]) //使用set消除重复，优化效率
  for (let i = 1; i * i <= n; i++) {
    neighbor.push(i * i);//注意这里是从小到大
  }
  let count = 0;
  while (queue.size) {
    let nextSet = new Set();
    count++;
    for (let v of queue) {
      for (let c of neighbor) {
        let add = v + c;
        if (add === n) {
          return count;
        }
        if (add > n) {
          //后面都是更大的了
          break;
        }
        nextSet.add(add);
      }
    }
    queue = nextSet;
  }
  return count;
};