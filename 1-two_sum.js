/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0, len = nums.length; i < len; i++) {
        for(let j=i+1; j<len; j++) {
            if( equals((nums[i]+nums[j]), target) )
                return [i, j];
        }
    }
    return null;
};

function equals(a, b) {
    return a === b;
}