//Given a non-empty string s, you may delete at most one character.
//Judge  whether you can make it a palindrome. 

var validPalindrome = function(s) {
    let count = 0;
    let mid = Math.floor((s.length - 1)/ 2);
    for(let i = 0; i < mid; i++) {
        var firstNum = s[i];
    }
    for(let j = mid; j < s.length; j++) {
        var secondNum = s[j];
    }
    if(firstNum !== secondNum) {
        count++;
    }
    if(count <= 1) return true;
}

const isPalindrome2 = (s, n) => {
    let subString = s.substring(0, n) + s.substring(n + 1);
    return subString === subString.split('').reverse().join('')
}

var validPalindrome2 = function(s) {
    for(let i = 0, j = s.length - 1; i <= j; i++, j--) {
        if(s[i] !== s[j]) return isPalindrome2(s, i) || isPalindrome2(s, j);
    }
    return true;
}

const validPalindrome3 = (s) => {
    for (let i = 0, stop = s.length / 2; i < stop; i++) {
        let j = s.length - i - 1
        if (s[i] !== s[j]) {
            return isPalindrome3(cut(s, i)) || isPalindrome3(cut(s, j))
        }
    }
    return true
};

const cut = (s, i) => s.substr(0, i) + s.substr(i + 1);

const isPalindrome3 = (s) => s === s.split('').reverse().join('');