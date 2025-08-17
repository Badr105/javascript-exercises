const findTheOldest = function(people) {
    let oldest = people[0];
    let age1, age2;
    for (let i = 1; i < people.length; i++) {
        if (!isNaN(oldest.yearOfDeath)) {
            age1 = oldest.yearOfDeath - oldest.yearOfBirth;
        }
        else {
            age1 = 2025 - oldest.yearOfBirth;
        }

        if (!isNaN(people[i].yearOfDeath)) {
            age2 = people[i].yearOfDeath - people[i].yearOfBirth;
        }
        else {
            age2 = 2025 - people[i].yearOfBirth;
        }

        if (age1 < age2) {
            oldest = people[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
