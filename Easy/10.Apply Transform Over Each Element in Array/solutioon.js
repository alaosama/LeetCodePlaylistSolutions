/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const transf = [];
    let i = 0;
    for (const element of arr) {
        transf.push(fn(element, i++));
    }
    return transf;
};
