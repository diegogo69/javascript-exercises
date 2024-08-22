const reverseString = function(string) {
    const lastIndex = string.length - 1;
    // Split string individual characters into an array
    let stringArray = string.split("");
    // Iterate over first half of string characters
    for (let i = 0; i < Math.floor(string.length / 2); i++) {
        // Interchange position of relative oposites index
        let temp = string[i];
        stringArray[i] = string[lastIndex -i]
        stringArray[lastIndex -i] = temp;
    }
    // Concat string reversed array
    let reversedString = stringArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

