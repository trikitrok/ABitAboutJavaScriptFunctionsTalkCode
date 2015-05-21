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