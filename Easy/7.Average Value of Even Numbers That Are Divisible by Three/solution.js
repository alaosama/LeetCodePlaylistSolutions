/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    const filterN = nums.filter(num => num % 2 === 0 && num % 3 === 0);
    
    if(filterN.length === 0)
        return 0;
    
    const n = filterN.reduce((acc, num) => acc + num, 0);
    return Math.floor(n / filterN.length);
};
