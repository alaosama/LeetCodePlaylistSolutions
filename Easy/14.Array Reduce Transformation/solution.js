/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {

    if (nums.lenght == 0) {
        return init
    }

    let result = init;
    let i = 0;
    const length = nums.length;
    while(i<length){
        result = fn(result, nums[i]);
        i++;
    }
    return result;
};
