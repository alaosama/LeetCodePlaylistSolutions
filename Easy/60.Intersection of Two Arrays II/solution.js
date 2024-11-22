/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = {};
    nums1.forEach(num => map[num] = (map[num] || 0) + 1);
    return nums2.filter(num => map[num]--> 0);
};
