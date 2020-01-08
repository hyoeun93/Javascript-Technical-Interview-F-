//Given two arrays, write a function to compute their intersection.

var intersection = function(nums1, nums2) {
    let result = new Set(nums1.filter(x => nums2.includes(x)));
    return Array.from(result);
}