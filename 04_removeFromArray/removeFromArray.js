const removeFromArray = function(array, ...itemsToRemove) {
    // Iterate over the element(s) to be removed
    for (let item of itemsToRemove) {
        // Initializer of loop
        itemIndex = array.indexOf(item);
        // Remove item if it's present in the array
        while(itemIndex !== -1) {
            array.splice(itemIndex, 1);
            itemIndex = array.indexOf(item);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
