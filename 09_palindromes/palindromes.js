let log = console.log
const palindromes = function (str) {
    let chars = str.split(''); // [...str]
    chars = chars.filter(char => /[a-z0-9]/i.test(char)).map(char => char.toLowerCase());
    let len = chars.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (chars[i] !== chars[(len-1) - i]) return false;        
    }
    return true
};
log(palindromes('A car, a man, a maraca.'));
// palindromes('ZZZZ car, a man, a maracaz.')

// Do not edit below this line
module.exports = palindromes;
