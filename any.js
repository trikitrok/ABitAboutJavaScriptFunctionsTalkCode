function even(number) {
  return number % 2 === 0;
}

even(3);
even(4);

function odd(number) {
  return !even(number);
}

odd(3);
odd(4);

function anyEven(numbers) {
  var i, number;

  for (i = 0; i < numbers.length; i++) {
    number = numbers[i];
    if (even(number)) {
      return true;
    }
  }
  return false;
}

function anyOdd(numbers) {
  var i, number;

  for (i = 0; i < numbers.length; i++) {
    number = numbers[i];
    if (odd(number)) {
      return true;
    }
  }
  return false;
}

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

any(even, [1, 3, 5]);

any(even, [1, 2, 5]);

any(odd, [2, 3, 4]);
any(odd, [8, 2, 6]);

var ingredients = ["potatoes", "onion", "mushrooms", "ham"];

var noMushrooms = !any(
  function(ingredient) {
    return ingredient === "mushrooms"
  },
  ingredients
);

function isMushrooms(ingredient) {
  return ingredient === "mushrooms";
}

noMushrooms = !any(isMushrooms, ingredients);