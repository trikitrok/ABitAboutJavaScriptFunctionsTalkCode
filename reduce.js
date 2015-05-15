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

var myReduce = function(accumulator, values, initialValue) {
    var res, i;

    if(initialValue === void 0) {
        res = values[0];
        i = 1;
    } else {
        res = initialValue;
        i = 0;
    }

    for (; i < values.length; i++) {
        res = accumulator(res, values[i]);
    }
    return res;
}

myReduce(function(a, b) {
    return a + b;
}, [1, 2, 3, 4]);

myReduce(function(a, b) {
    return a + b;
}, [1, 2, 3, 4], 10);

myReduce(function(a, b) {
    return a * b;
}, [1, 2, 3, 4], 1);

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