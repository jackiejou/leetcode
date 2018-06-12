/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  let obj = {};
  for (let num of nums) {
    if (obj[num]) return true;
    obj[num] = true;
  }
  return false;
};

console.log(containsDuplicate([1,2,3,4,5]));
