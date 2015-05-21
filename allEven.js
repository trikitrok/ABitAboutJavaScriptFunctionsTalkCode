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