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

    initLoopState();

    for (; i < values.length; i++) {
        res = accumulator(res, values[i]);
    }
    return res;

    function initLoopState() {
        if (initialValue === void 0) {
            res = values[0];
            i = 1;
        } else {
            res = initialValue;
            i = 0;
        }
    }
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
    var nucleotides = strand.split(''),
        frequenciesByNucleotides = {
            "A": 0,
            "T": 0,
            "C": 0,
            "G": 0
        };

    nucleotides.reduce(function(frequencies, nucleotide) {
            frequencies[nucleotide] += 1;
            return frequencies;
        },
        frequenciesByNucleotides);

    return frequenciesByNucleotides;
};

countNucleotides("GATTACA")