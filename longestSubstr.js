//Given a string, find the length of the longest substring without repeating characters. 
//ex) "abcabcbb"

var lengthOfLongestSubstring = function(s) {
    let map = {};
    let start = 0;
    let count = 0;
    let arr = s.split('');

    for(let i = 0; i < s.length; i++) {
        let current = map[arr[i]];
        if(current !== null && start <= current) {
            start = current + 1; 
        } else {
            count = Math.max(count, i - start + 1)
        }
        map[arr[i]] = i;
    }
    return count;
}

//brute force method
var lengthOfLongestSubstring2 = function(s) {
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        let set = new Set([char]);
        
        for(let j = i + 1; j < s.length; j++) {
            let char = s.charAt(j);
            if(set.has(char)) {
                break;
            } else {
                set.add(char);
            }

            count = Math.max(count, set.size)
        }
    }
    return count; 
}

//sliding window method
var lengthOfLongestSubstring3 = function(s) {
    let count = 0;
    let i = 0;
    let j = 0;
    let n = s.length;
    let set = new Set();

    while(i < n && j < n) {
        let char = s.charAt(j);
        if(!set.has(char)) {
            set.add(char);
            j++;
            count = Math.max(count, j - i);
        } else {
            set.delete(s.charAt(i));
            i++;
        }
    }
    return count;
}