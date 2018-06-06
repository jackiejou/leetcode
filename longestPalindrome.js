/**
 * @param {string} s
 * @return {string}
 */
let expand = (str, left, right) => {
  while (str[left] === str[right] && left >= 0 && right < str.length) {
    left--;
    right++;
  }
  return right - left - 1;
};

var longestPalindrome = function(s) {
  let longest = 0;
  let word = '';
  for (let i = 0; i < s.length; i++) {
    let len = Math.max(expand(s, i, i + 1), expand(s, i - 1, i + 1));
    if (len > longest) {
      longest = len;
      let delta = Math.floor(len / 2);
      let start = i - delta;
      let end = i + delta + 1;
      if (!(len % 2)) start++;
      word = s.substring(start, end);
    }
  }
  return word;
};

console.log(longestPalindrome('2'));
