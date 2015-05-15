var double = function(numbers) {
  var res = [],
    i;
  for (i = 0; i < numbers.length; i++) {
    res.push(2 * numbers[i]);
  }
  return res;
}

var triple = function(numbers) {
  var res = [],
    i;
  for (i = 0; i < numbers.length; i++) {
    res.push(3 * numbers[i]);
  }
  return res;
}

var myMap = function(transform, values) {
  var res = [],
    i;
  for (i = 0; i < values.length; i++) {
    res.push(transform(values[i]));
  }
  return res;
}

myMap(
  function(num) {
    return 2 * num;
  }, [1, 2, 3, 4]
);

myMap(
  function(num) {
    return 3 * num;
  }, [1, 2, 3, 4]
);

[1, 2, 3, 4].map(
  function(num) {
    return 2 * num;
  }, [1, 2, 3, 4]
);

