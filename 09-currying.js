var curriedReduce = function(combinator) {
    return function(initialValue) {
        return function(values) {
            var res = initialValue || 0,
                i;

            for (i = 0; i < values.length; i++) {
                res = combinator(res, values[i]);
            }
            return res;
        }
    }
}

var sum = curriedReduce(function(a, b) {
    return a + b;
});

sum(0)([1, 2, 3, 4]);

var curriedReduce = function(combinator) {
    return function(initialValue, values) {
        var res = initialValue || 0,
            i;

        for (i = 0; i < values.length; i++) {
            res = combinator(res, values[i]);
        }
        return res;
    }
}

var sum = curriedReduce(function(a, b) {
    return a + b;
});

sum(0, [1, 2, 3, 4]);