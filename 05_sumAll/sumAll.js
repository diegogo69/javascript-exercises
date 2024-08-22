const sumAll = function(lowerBound, upperBound) {
    if (!Number.isInteger(lowerBound) || !Number.isInteger(upperBound)) return 'ERROR'
    else if (lowerBound < 1 || upperBound < 1) return 'ERROR'

    // Invert if lowerBound greater than upperBound
    if (upperBound < lowerBound) {
        let temp = lowerBound;
        lowerBound = upperBound;
        upperBound = temp;        
    }
    let sum = 0;
    // Iterate over range of bounds and sum each
    for (let i = lowerBound; i <= upperBound; i++) {
        sum += i;
    }
    return sum;
}

let rangeSum = sumAll(123, 2);
console.log(rangeSum);
// Do not edit below this line
module.exports = sumAll;
