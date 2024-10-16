/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    const set = new Set(nums);
    let pairs = 0;
    for (const num of set) {
        pairs += Math.floor(nums.filter(x => x === num).length / 2);
    }
    return [pairs, nums.length - pairs * 2];
};
