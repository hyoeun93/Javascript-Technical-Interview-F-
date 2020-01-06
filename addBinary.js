//Given two binary strings, return their sum (also a binary string).
/*
Ex1:
Input: a = "11", b = "1"
Output: "100" 
*/

let addBinary = function(a, b) {
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
}

let addBinaryManual = function(A, B) {
    let sum = '';
    let carry = 0;
    let i = A.length - 1;
    let j = B.length - 1;
    while (i >= 0 || j >= 0) {
        let a = A[i] ? A[i] : '0';
        let b = B[j] ? B[j] : '0';
        sum = String(a ^ b^ carry) + sum;
        if (a == b && a !== String(carry)) {
            carry = Number(!carry);
        }
        i--;
        j--;
    }
    if(carry) {
        sum = String(carry) + sum;
    }
    return sum;
}