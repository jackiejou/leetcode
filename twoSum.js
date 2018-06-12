/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let obj = {};
  let ans = [];
  nums.forEach((num, index) => { // for loop can early return
    if (obj[target - num] !== undefined) ans = [obj[target - num], index];
    obj[num] = index;
  });
  return ans;
};

console.log(twoSum([7, 1, 6, 2, 5], 13));
