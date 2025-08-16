const fibonacci = function() {
    let order = Number(arguments[0]);
    
    if (order < 0) {
        return "OOPS";
    }
    else if (order === 0) {
        return 0;
    }
    else {
        let set = new Array();

        set.push(1);
        set.push(1);

        for (let i = 0; i < order - 2; i++) {
            set.push(set[i] + set[i + 1]);
        }

        return set[order - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
