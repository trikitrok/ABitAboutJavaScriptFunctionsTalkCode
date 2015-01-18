var cook = function(food) {
  console.log("Cook " + food + "!");
  return food;
};

var eat= function(food) {
  console.log("Eat " + food + "!");
  return food;
};

var cookAndEat = function(food) {
  eat(cook(food));
  return food;
};

cookAndEat("chocolate");

var compose = function(f, g) {
  return function(c) {
    return f(g(c))
  }
};

var cookAndEat = compose(eat, cook);

cookAndEat("chocolate");

var myReduce = function(values, combinator, initialValue) {
    var res = initialValue || 0,
        i;

    for (i = 0; i < values.length; i++) {
        res = combinator(res, values[i]);
    }
    return res;
};

var dreamWith = function(food) {
  console.log("Dream with " + food + "!");
  return food;
};

var identity = function(x) {
  return x;
};

var fn = myReduce([eat, cook, dreamWith], compose, identity);

fn("Cookies");