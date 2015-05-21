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