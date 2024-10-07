/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let index = 0;
    const chunked = [];
    while (index< arr.length){
        chunked.push(arr.slice(index, index + size));
        index += size;
    }
    return chunked
};
