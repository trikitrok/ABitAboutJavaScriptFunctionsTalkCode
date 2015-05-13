var partiallyAppliedReduce = function(accumulator) {
    return function(values, initialValue) {
        var res, i;

        if (initialValue === void 0) {
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
};

var sum = partiallyAppliedReduce(function(a, b) {
    return a + b;
});

sum(0, [1, 2, 3, 4]);

var _und = require('./node_modules/underscore-node/lib/underscore.js');

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

var sum = _und.partial(myReduce, function(a,b) {return a + b;});

sum([1,2,3])

sum([1,2,3], 5)

sum([1,2,3], 10)

_und.reduce([1,2,3], function(a,b) {return a+b;})

_und.reduce([1,2,3], function(a,b) {return a+b;}, 10)

var reduceWith = function (fn, initialValue, coll) {
    return _und.reduce(coll, fn, initialValue);
};

var sum2 = _und.partial(reduceWith, function(a,b) {return a+b;}, 0);

sum2([1,2])

