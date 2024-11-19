/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let b = 0;
    let c = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < k) {
            b++;
        } else {
            c.push(nums[i]);
        }
    }
    return b;
};
