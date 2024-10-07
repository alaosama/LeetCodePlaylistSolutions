/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        const compl = target - nums[i];
        if(numMap.has(compl)) {
            return[numMap.get(compl), i];
        }
        numMap.set(nums[i], i)
    }
    return [];
};
