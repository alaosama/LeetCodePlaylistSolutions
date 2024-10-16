/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roM = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for ( let i = 0; i < s.length; i++) {
        let curr = roM[s[i]];
        let next = roM[s[i + 1]];
        result += (next && curr < next) ? -curr : curr;
    }
    return result;
};
