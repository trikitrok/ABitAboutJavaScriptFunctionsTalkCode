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

var dreamWith = function(food) {
  console.log("Dream with " + food + "!");
  return food;
};

var identity = function(x) {
  return x;
};

var fn = [eat, cook, dreamWith].reduce(compose, identity);

fn("Cookies");