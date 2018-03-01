/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i ++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      count++;
      i--;
    }
  }
  while (count > 0) {
    nums.push(0);
    count--;
  }
  console.log(nums);
};

moveZeroes([2,3,0,4,0,1,6]);
