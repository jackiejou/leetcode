/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let str = '';
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let index = str.indexOf(s[i]);
    if (index >= 0) str = str.substring(index + 1); // reset str to the letter after repeat char
    str += s[i];
    if (str.length > max) max = str.length;
  }
  return max;
};

console.log(lengthOfLongestSubstring('cdceeee'));