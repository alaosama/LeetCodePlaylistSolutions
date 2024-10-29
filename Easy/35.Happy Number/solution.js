/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const s = new Set();
    while (n !== 1 && !s.has(n)) {
        s.add(n);
        n = String(n).split('').reduce((sum, digit) => sum + digit * digit, 0);
    }
    return n === 1;
};
