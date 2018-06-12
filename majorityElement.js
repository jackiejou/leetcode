/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  let obj = {};
  for (let num of nums) {
    obj[num] ? obj[num]++ : obj[num] = 1;
    if (obj[num] > nums.length / 2) return num;
  }
  return -1;
};

console.log(majorityElement([0,0,1,1,1,1]));
