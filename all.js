function even(number) {
  return number % 2 === 0;
}

function odd(number) {
  return !even(number);
}

function allEven(numbers) {
  var i, number;

  for(i=0;i<numbers.length; i++) {
    number = numbers[i];

    if(odd(number)) {
      return false;
    }
  }
  return true;
}

function allOdd(numbers) {
  var i, number;

  for(i=0;i<numbers.length; i++) {
    number = numbers[i];

    if(even(number)) {
      return false;
    }
  }
  return true;
}

