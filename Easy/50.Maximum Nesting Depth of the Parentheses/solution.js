/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depth = 0, maxDepth = 0;
    for (let char of s) {
        depth += char === '(' ? 1 : char === ')' ? -1 : 0;
        maxDepth = Math.max(maxDepth, depth);
    }
    return maxDepth;
};
