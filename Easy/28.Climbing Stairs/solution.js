/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 1, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a +b];
    }
    return b;
};
