/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => { // Work in progress
  if (!nums.length) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  let max = 0;
  for (let i = 0; i < nums.length; i+=2) {
    max += nums[i];
  }
  let next = 0;
  for (let i = 1; i < nums.length; i+=2) {
    next += nums[i];
  }
  return max > next ? max : next;
};

console.log(rob([1,2,1,2,0,0,1]));
