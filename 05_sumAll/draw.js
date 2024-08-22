

// const sumAll = function(lowerBound, upperBound) {
//     if (!Number.isInteger(lowerBound) || !Number.isInteger(upperBound)) return 'ERROR'
//     else if (lowerBound < 1 || upperBound < 1) return 'ERROR'

//     let n = upperBound;
//     // Invert if lowerBound greater than upperBound
//     if (upperBound < lowerBound) {
//         n = lowerBound;
//         lowerBound = upperBound;
//         upperBound = n;        
//     }
//     // Recursive function to get the sum of the range
//     function recursive(n) {
//         // (Base case) If number given equals lower bound return
//         if (n === lowerBound) {
//             return lowerBound;
//         }
//         // Return the number given plus the same number -1
//         else {
//             return n += recursive(n-1)
//         }
//     }
//     // Get sum recursively. Starting by upper bound
//     sum = recursive(n);
//     return sum;
// };