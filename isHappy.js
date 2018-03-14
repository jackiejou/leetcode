/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let squareAndSum = (num) => {
    return num.toString().split('').map(Number).reduce((acc, curr) => acc + curr ** 2, 0);
  }
  let result = {};
  while (n !== 1 && !result[n]) {
    result[n] = true;
    n = squareAndSum(n);
  }
  console.log(Object.keys(result));
  return n === 1;
};

console.log(isHappy(481));
