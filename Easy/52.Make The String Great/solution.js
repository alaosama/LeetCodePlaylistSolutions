/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let result = '';
    for (let char of s) {
    if (result && Math.abs(result.charCodeAt(result.length - 1) - char.charCodeAt(0)) === 32) {
        result = result.slice(0, -1);
        } else {
            result += char;
        }
    }
    return result;
};
