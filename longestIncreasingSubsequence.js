/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let count = 0;
  let find = (array) => {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
      let arr = array.slice(i).filter(num => num > array[i]);
      if (arr.length > max) {
        console.log(nums[i]);
        array = arr;
        max = arr.length;
      }
    }
    if (array.length) {
      count++;
      find(array);
    }
    return;
  }
  find(nums);
  return count;
};
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
// length 3 [1,2,30]
