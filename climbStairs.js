/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => { // same as fibonacci
  let a = 1; // first solution n = 1
  let b = 0; // n = 0
  let temp;
  while (n >= 0){
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }
  return b;
};

console.log(climbStairs(5));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(6));
