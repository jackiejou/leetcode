/**
 * @param {string} s
 * @return {number}
 */

const romans = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

// assuming only valid roman numerals input
var romanToInt = function(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    romans[s[i]] < romans[s[i + 1]] ? sum -= romans[s[i]] : sum += romans[s[i]];
  }
  return sum;
};

console.log(romanToInt('IV')); // 4
console.log(romanToInt('CIV')); // 104
console.log(romanToInt('XCIX')); // 99
console.log(romanToInt('VIII')); // 8
console.log(romanToInt('MCIII')); // 1103
