//Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array

var merge = function(nums1, m, nums2, n) {
    let i = m + n;
    m--;
    n--;
    while(n >= 0) {
        i--;
        if(nums1[m] > nums2[n]) nums1[i] = nums1[m--];
        else nums1[i] = nums2[n--]; 
    }
}