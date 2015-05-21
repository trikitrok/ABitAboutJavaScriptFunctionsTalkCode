var partiallyAppliedReduce = function(accumulator) {
    return function(initialValue, initialValue) {
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

var squaredProduct = partiallyAppliedReduce(function (a, b) {
    return a*a * b*b;
});

squaredProduct(1, [1, 2]);

var _und = require('./node_modules/underscore-node/lib/underscore.js');

function any(predicate, collection) {
  var i, element;

  for (i = 0; i < collection.length; i++) {
    element = collection[i];
    if (predicate(element)) {
      return true;
    }
  }
  return false;
}

function complement(fn) {
  return function() {
    return !fn.apply(this, arguments);
  };
}

function isMushrooms(ingredient) {
  return ingredient === "mushrooms";
}

var anyMushrooms = _und.partial(any, isMushrooms);

anyMushrooms(["potatoes", "onion", "mushrooms", "ham"]);

anyMushrooms(["potatoes", "onion", "ham"]);

var noMushrooms = complement(anyMushrooms);

var anyNoMushrooms = _und.partial(any, complement(isMushrooms));

var allMushrooms = complement(anyNoMushrooms);

noMushrooms(["potatoes", "onion", "mushrooms", "ham"]);

noMushrooms(["potatoes", "onion", "ham"]);

var myReduce = function(accumulator, values, initialValue) {
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

var sum = _und.partial(myReduce, function(a, b) {
    return a + b;
});

sum([1, 2, 3])

sum([1, 2, 3], 5)

sum([1, 2, 3], 10)

_und.reduce([1, 2, 3], function(a, b) {
    return a + b;
})

_und.reduce([1, 2, 3], function(a, b) {
    return a + b;
}, 10)

var reduceWith = function(fn, initialValue, coll) {
    return _und.reduce(coll, fn, initialValue);
};

var sum2 = _und.partial(reduceWith, function(a, b) {
    return a + b;
}, 0);

sum2([1, 2])