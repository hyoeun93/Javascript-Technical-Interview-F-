//Given two binary strings, return their sum (also a binary string).
/*
Ex1:
Input: a = "11", b = "1"
Output: "100" 
*/

let addBinary = function(a, b) {
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
}