/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString();
    for (let i = 0, s = str.length - 1; i < s; i++, s--) {
        if (str[i] !== str[s]) {
            return false;
        }
    }
    return true;
};
