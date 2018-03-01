/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (Math.abs(x) > 2147483647) {
    return 0;
  }
  if (x >= 0) {
    return +x.toString().split('').reverse().join('');
  } else {
    x = Math.abs(x);
    return -x.toString().split('').reverse().join('');
  }
};

console.log(reverse(1534236469));
