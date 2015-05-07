var curriedReduce = function(combinator) {
    return function(initialValue) {
        return function(values) {
            var res, i;

            if (initialValue === void 0) {
                res = values[0];
                i = 1;
            } else {
                res = initialValue;
                i = 0;
            }

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