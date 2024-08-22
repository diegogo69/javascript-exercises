const leapYears = function(year) {
    // If multiple of 400
    if (year % 400 == 0) return true
    // If multiple of 4 but not of 100
    else if (year % 4 == 0 && year % 100 != 0) return true
    // else false
    else return false 
};

// Do not edit below this line
module.exports = leapYears;
