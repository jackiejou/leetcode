/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let set = [...new Set(nums)].sort((a, b) => b - a); // NEED LINEAR
  return set[2] === undefined ? set[0] : set[2];
};

console.log(thirdMax([0,2,6,3,2,2,3,3,3,6]));
console.log(thirdMax([3,3,4,3,4,3,0,3,3]));
