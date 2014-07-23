var cook = function(food) {
  console.log("Cook " + food + "!");
  return food;
};

var eat= function(food) {
  console.log("Eat " + food + "!");
};

var cookAndEat = function(food) {
  return eat(cook(food));
};

cookAndEat("chocolate");

var compose = function(f, g) {
  return function(c) {
    return f(g(c))
  }
};

var cookAndEat = compose(eat, cook);

cookAndEat("chocolate");