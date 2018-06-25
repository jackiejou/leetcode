/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  let num1 = nums[0];
  // num2 max starting point
  let num2 = Math.max(nums[0], nums[1]);
  if (nums.length === 2) return num2;
  let maxVal;
  for (let i = 2; i < nums.length; i++) {
    // Math.max(rob this house vs robbed previous house)
    maxVal = Math.max(num1 + nums[i], num2);
    num1 = num2;
    num2 = maxVal;
  }
  return maxVal;
}

console.log(rob([2,1,1,2]));
