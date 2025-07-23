const removeFromArray = function() {
    let array = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        let value = arguments[i];
        if (array.includes(value)) {
            array = array.filter(function(item) {
                return item !== value;
            });
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
