/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString();
    const reverse = str.split('').reverse().join('');
    return str === reverse;
};
