/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefixSum = nums.reduce((acc, num, i) => {
        acc[i + 1] = acc[i] + num;
        return acc;
    }, [0]);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.prefixSum[right + 1] - this.prefixSum[left];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */