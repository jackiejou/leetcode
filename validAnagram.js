/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s === t) return true;
  let obj1 = {};
  let obj2 = {};
  s.split('').forEach(char => {
    obj1[char] ? obj1[char]++ : obj1[char] = 1;
  });
  t.split('').forEach(char => {
    obj2[char] ? obj2[char]++ : obj2[char] = 1;
  });
  if (s.length === t.length) {
    for (let i = 0; i < s.length; i ++) {
      if (obj1[s[i]] !== obj2[s[i]]) return false;
    }
    return true;
  }
  return false;
};

console.log(isAnagram('ttoe', 'tote'));
