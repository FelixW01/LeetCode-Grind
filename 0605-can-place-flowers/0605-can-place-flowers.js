/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] == 0 &&  (i == 0 || flowerbed[i-1] == 0) && (i == flowerbed.length- 1 ||flowerbed[i+1] == 0)) {
            flowerbed[i] = 1
            n--
            i++
        }
    }
    return n <= 0
};

// flowerbed, 0 = empty 1 = filled
// can't be adjacent
// return true if the flower can be planted
