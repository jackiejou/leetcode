/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  if (n === 1) {
    return ['()'];
  }
  let addParen = (str) => {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
      arr.push(str.slice(0, i) + '()' + str.slice(i));
    }
    return arr;
  }
  if (n > 1) {
    let results = [];
    generateParenthesis(n - 1).forEach(str => {
      results.push(...addParen(str));
    });
    return [...new Set(results)];
  }
};

console.log(generateParenthesis(3));
