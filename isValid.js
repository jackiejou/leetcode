/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let map = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  let q = [];
  for (let char of s) {
    if (char === '(' || char === '[' || char === '{') q.push(char);
    if (char === ')' || char ===']' || char === '}') {
      if (map[char] !== q.pop()) return false;
    }
  }
  return q.length === 0;
};

console.log(isValid('([]{})'));