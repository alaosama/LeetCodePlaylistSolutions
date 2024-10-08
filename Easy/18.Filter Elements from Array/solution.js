/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filArr = [];
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        if (fn(arr[i], i)) {
            filArr.push(arr[i]);
        }
    }
    return filArr;
};
