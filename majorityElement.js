/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] ? obj[nums[i]]++ : obj[nums[i]] = 1;
    if (obj[nums[i]] > nums.length / 2) {
      return nums[i];
    }
  }
};

console.log(majorityElement([0,0,1,1,1,1]));
