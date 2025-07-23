const sumAll = function() {
    let var1 = arguments[0], var2 = arguments[1], sum = 0;

    if (Number.isInteger(var1) && Number.isInteger(var2)) {
        if (var1 > 0 && var2 > 0) {
            if (var1 > var2) {
                [var1, var2] = [var2, var1];
            }
            for (let i = var1; i <= var2; i++) {
                sum += i;
            }
            return sum;
        }
        else {
            return "ERROR";
        }
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
