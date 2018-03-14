/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  if (!nums.length) {
      return -1;
  }
  let currIndex = 0;
  let curr = nums[currIndex];
  if (curr === target) {
    return currIndex;
  }
  if (curr > target) {
    currIndex = nums.length - 1;
    let last = curr;
    curr = nums[currIndex];
    while(curr > target && last > curr) {
      last = curr;
      curr = nums[currIndex -= 1];
    }
    if (curr === target) {
      return currIndex;
    }
    return -1;
  }
  if (curr <= target) {
    let last = curr;
    curr = nums[currIndex += 1];
    while (curr < target && last < curr) {
      last = curr;
      curr = nums[currIndex += 1];
    }
    if (curr === target) {
      return currIndex;
    }
    return -1;
  }
};
