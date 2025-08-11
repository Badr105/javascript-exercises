const palindromes = function () {
    let word = arguments[0].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g, "").toLowerCase();
    let flag = 1;
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            flag = 0;
            break;
        }
    }

    if (flag === 1) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;