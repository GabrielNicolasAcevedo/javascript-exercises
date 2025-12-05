const palindromes = function (string) {
    let cleanString = string
        //Making it insensitive
        .toLowerCase()
        // Match all that are not a lowercase letter or digit and replace with ''
        // g flag to make it global, otherwise it will take the first match
        .replace(/[^a-z0-9]/g, '')
    let reversedString = cleanString
        .split("")
        .reverse()
        //join methods transforms an array to string
        .join("");
    return cleanString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
