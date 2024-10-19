/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return 1;
    let st = new Array(n + 1);
    st[1] = 1;
    st[2] = 2;
    for (let i = 3; i <= n; i++) {
        st[i] = st[i - 1] + st[i - 2];
    }
    return st[n];
};
