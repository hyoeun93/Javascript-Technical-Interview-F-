//Given an arry of integers nums sorted in ascending order, find the starting and ending position of a given target value.
//If the target is not found in the array, return [-1, -1].

var searchRange = function(nums, target) {
    let result = [-1, -1];
    let i = 0, j = nums.length - 1;
    while(i <= j) {
        let mid = Math.floor((j + j) / 2)
        if(nums[mid] < target) {
            i = mid + 1;
        } else if(nums[mid] > target) {
            j = mid - 1;
        } else {
            let left = med, right = mid 
            while(nums[left] === target && left >= 0) {
                left -= 1
            }
            result[0] = left + 1;
            while(nums[right] === target && right < nums.length) {
                right += 1
            }
            result[1] = right - 1;
            return result
        }
    }
    return result;
};

var searchRange2 = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let startIndex = -1;
    let endIndex = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[start] === target) { startIndex = start; } else { start++; }
        if (nums[end] === target) { endIndex = end;} else { end--; }
    }
    return [startIndex, endIndex];
 };

var searchRange3 = function searchRange(nums, target) {
    return [nums.indexOf(target), nums.lastIndexOf(target)];
  }