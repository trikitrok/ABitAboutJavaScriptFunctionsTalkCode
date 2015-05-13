// This version of the code is
// more similar to what was really being executed
// in the previous example and makes it easier
// to get to the right answer

(function() {
  var x;

  console.log(x);

  if (true) {
    x = 'inner';
    console.log(x)
  }
})();

// So avoid misleading code like this
(function (bar) {
  var baz = bar * 2;

  if (bar > 1) {
    var blitz = baz - 100;

    // ...
  }
})();

// Better declare all your variables at
// the beginning of the function, to make
// your code easier to understand
(function (bar) {
  var baz = bar * 2,
    blitz;

  if (bar > 1) {
    blitz = baz - 100;

    // ...
  }
})();