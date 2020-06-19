/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    return [...s.toLowerCase().replace(/[^a-z0-9]/gi, '')].reverse().join`` === [...s.toLowerCase().replace(/[^a-z0-9]/gi,'')].join``;
};