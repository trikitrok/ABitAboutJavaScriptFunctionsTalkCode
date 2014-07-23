var sum = function(numbers) {
    var res = 0,
        i;
    for (i = 0; i < numbers.length; i++) {
        res += numbers[i];
    }
    return res;
}

var prod = function(numbers) {
    var res = 1,
        i;
    for (i = 0; i < numbers.length; i++) {
        res *= numbers[i];
    }
    return res;
}

var myReduce = function(values, combinator, initialValue) {
    var res = initialValue || 0,
        i;

    for (i = 0; i < values.length; i++) {
        res = combinator(res, values[i]);
    }
    return res;
}

myReduce([1, 2, 3, 4], function(a, b) {
    return a + b;
});
myReduce([1, 2, 3, 4], function(a, b) {
    return a + b;
}, 10);

myReduce([1, 2, 3, 4], function(a, b) {
    return a * b;
}, 1);

var countNucleotides = function(strand) {
    var letters = strand.split(''),
        countedNucleotides = {
            "A": 0,
            "T": 0,
            "C": 0,
            "G": 0
        };

    letters.reduce(function(count, letter) {
            count[letter]++;
            return count;
        },
        countedNucleotides);

    return countedNucleotides;
};

countNucleotides("GATTACA")