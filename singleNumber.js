/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  let obj = {};
  nums.forEach(num => {
    obj[num] ? delete obj[num] : obj[num] = true;
  });
  return +Object.keys(obj)[0];
};

console.log(singleNumber([1,2,3,3,2,1,4,7,7]));
