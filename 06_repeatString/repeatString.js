const repeatString = function(word, num) {
    let result = "";
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            result = result + word;
        }
        return result;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
