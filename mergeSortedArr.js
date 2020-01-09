//Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array

var merge = function(nums1, m, nums2, n) {
    let i = 0;

    if(nums1[i] <= nums2[i]) {
        nums1.slice(i, i + 1, nums2[i])
    }
    return nums1;
}