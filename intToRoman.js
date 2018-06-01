/**
 * @param {number} num
 * @return {string}
 */

const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

var intToRoman = function(num) {
  let str = '';
  numbers.forEach((number, index) => {
    while (num >= number) {
      str += romans[index];
      num -= number;
    }
  });
  return str;
};

console.log(intToRoman(6));
console.log(intToRoman(19));
console.log(intToRoman(44));
console.log(intToRoman(987));
console.log(intToRoman(250));