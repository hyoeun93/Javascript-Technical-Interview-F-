//Find the kth largest element in an unsorted array. 

var findKthLargest = function(nums, k) {
    let count = 0;
    nums.sort((a, b) => a - b);
    for(let i = nums.length - 1; i >= 0; i--) {
        count++;
        if(count === k) {
            return nums[i];
        }
    }
}

var findKthLargest2 = function(nums, k) {
    let length = nums.length;
    let rs = nums.sort((a, b) => a - b);
    return rs[length - k];
}