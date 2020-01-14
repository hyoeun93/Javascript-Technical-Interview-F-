//Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

var nextPermutation = function(nums) {
    for(let i = nums.length - 2; i >= 0; i--) {
        if(nums[i] < nums[i + 1]) {
            //scan from right and find the digit that is larger than nums[i]
            for(let j = nums.length - 1; j >= 0; j--) {
                if(nums[j] > nums[i]) {
                    //swap nums[i] and nums[j], reverse from i+1
                    swap(nums, i, j);
                    return;
                }
            }
        }
    }
}

const swap = (nums, i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

