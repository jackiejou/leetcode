/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      nums.splice(i, 1);
      i--;
    } else {
      obj[nums[i]] = 1;
    }
  }
  return nums.length;
};

console.log(removeDuplicates([1,1,2,4,2,5,1]));
