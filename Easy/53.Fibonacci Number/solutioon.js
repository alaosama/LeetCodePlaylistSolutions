/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const m = [0, 1];
    for (let i = 2; i <= n; i++) {
        m[i] = m[i - 1] + m[i - 2];
    }
    return m[n];
};
