//return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

var strStr = function(haystack, needle) {
    let index = -1;

    if(haystack.length && needle) {
        for(let i = 0; i < haystack.length; i++) {
            if(haystack[i] == needle[0]) {
                if(haystack.substring(i, i + needle.length) == needle) {
                    return i;
                }
            }
        }
    } else if (!needle) return 0;
    return index;
};