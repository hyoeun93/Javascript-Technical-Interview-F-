//write a function to determine of one string is a case-insensitive anagram of another string

let isAnagram = function (str1, str2) {
    let sorted1 = str1.split('').sort().join('').toLowerCase();
    let sorted2 = str2.split('').sort().join('').toLowerCase();
    return (sorted1 === sorted2);
}

console.log(isAnagram('hello', 'jello'));
console.log(isAnagram('hello', 'loelh'));