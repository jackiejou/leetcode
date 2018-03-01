/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
  return Math.log2(2**a * 2 **b);
};

console.log(getSum(3, -2));
