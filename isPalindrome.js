/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.toLowerCase().replace(/[\W]+/g, '');
    let reverse = str.split('').reverse().join('');
    return str === reverse;
};

console.log(isPalindrome('race $  ca.##!r'));