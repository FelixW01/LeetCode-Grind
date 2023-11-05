/**
 * @param {string} s
 * @return {string}
 */

const Vowels = 'aeiouAEIOU'
var reverseVowels = function(s) {
    const arr = [...s];

    for(let i = 0, j = arr.length - 1; i < j; i++, j--) {
        while (!Vowels.includes(arr[i]) && i < j) {
            i++;
        }
        while (!Vowels.includes(arr[j]) && i < j) {
            j--;
        }

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('')
};

// 2 point from each start/end
// if arr[i] doesn't include vowels && i < j then i++
// if arrp[j] doesn't include vowels && i < j then j--
// array[i], array[j] = array[j], array[i] swap them