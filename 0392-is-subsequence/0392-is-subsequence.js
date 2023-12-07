/*-
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 2 pointer
// linear
// left = 0
// right = arr.length-1

// abc
// if the current string is the same, advance both pointer
// ahbgdc

var isSubsequence = function(s, t) {
    let p1 = 0,
        p2 = 0
    while(p1 < s.length && p2 < t.length) {
        if(s[p1] === t[p2]) {
            p1++;
            p2++;
        }
        if(s[p1] !== t[p2]) {
            p2++;
        }
    }
    return p1 === s.length
};