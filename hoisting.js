var x = 'outer';

(function() {
  console.log(x);

  if (true) {
    var x = 'inner';
    console.log(x)
  }
})();
