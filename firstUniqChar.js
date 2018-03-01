/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  let obj = {};
  for (let char of s) {
    obj[char] ? obj[char]++ : obj[char] = 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar('loveleetcode'));
