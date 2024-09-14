/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function sqrt(x) {
    if (x==0 || x==1) return x;
    let left = 1;
    let right = Math.floor(x/2);
    let ans = 0;

    while (left <= right){
        let mid = Math.floor((left + right)/2);
        if(mid * mid ==x){
            return mid;
        } else if(mid * mid < x){
            left = mid + 1;
            ans = mid;
        } else {
            right = mid - 1;
        }
    }
    return ans;
};
