/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let neg = x < 0 ? true : false;
    let reverseNumber = Math.abs(x).toString().split('').reverse().join('');
    return neg ? -reverseNumber : +reverseNumber;
};

console.log(reverse(-740));