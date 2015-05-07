var getOdds = function(numbers) {
  var i,
    res = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      res.push(numbers[i]);
    }
  }
  return res;
};

var getNegatives = function(numbers) {
  var i,
    res = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      res.push(numbers[i]);
    }
  }
  return res;
};

var filter = function(pred, values) {
  var i,
    res = [];
  for (i = 0; i < values.length; i++) {
    if (pred(values[i])) {
      res.push(values[i]);
    }
  }
  return res;
};

filter(function(num) {
  return num % 2 === 0;
}, [1, 2, 3, 4, 5, 6])

filter(function(num) {
  return num % 2 === 1;
}, [1, 2, 3, 4, 5, 6])

filter(function(num) {
  return num > 0;
}, [-1, -2, -3, 4, -5, 6])