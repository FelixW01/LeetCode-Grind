/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // iterate through the array, if res[i] = 0 then shift it out, push towards the end.
    let index = 0
    for( let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[index] = nums[i]
            index++;
        }
    }

    for (let i = index; i < nums.length; i++) {
        nums[i] = 0
    }
    return nums
};