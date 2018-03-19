/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => { // same as fibonacci
  let a = 1, b = 0; // n = 0
  while (n > 0) {
    [a, b] = [a + b, a];
    n--;
  }
  return a;
};

console.log(climbStairs(5));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(6));
