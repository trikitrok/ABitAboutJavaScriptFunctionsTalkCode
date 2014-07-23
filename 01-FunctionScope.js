// Misleading
function foo(bar) {
  var baz = bar * 2;

  if (bar > 1) {
    var blitz = baz - 100;

    // ...
  }
}

// Better
function foo(bar) {
  var baz = bar * 2,
    blitz;

  if (bar > 1) {
    blitz = baz - 100;

    // ...
  }
}

// Problem -> hoisting!!
var questionable = 'outer';

(function() {
  console.log(questionable);

  if (true) {
    var questionable = 'inner';
    console.log(questionable)
  }
})();

// ok
var sum = 0;
for (var i = 1; i <= 100; i++) {
  sum = sum + i
}

// Similar example, still ok
var introductions = [],
  names = ['Karl', 'Friedrich', 'Gauss'];

for (var i = 0; i < 3; i++) {
  introductions[i] = "Hello, my name is " + names[i]
}

// Problems, why? i is the culprit!
var introductions = [],
  names = ['Karl', 'Friedrich', 'Gauss'];

for (var i = 0; i < 3; i++) {
  introductions[i] = function(soAndSo) {
    return "Hello, " + soAndSo + ", my name is " + names[i]
  }
}

// Fixed with a let
var introductions = [],
  names = ['Karl', 'Friedrich', 'Gauss'];

for (var i = 0; i < 3; i++) {
  (function(i) {
    introductions[i] = function(soAndSo) {
      return "Hello, " + soAndSo + ", my name is " + names[i]
    }
  })(i)
}

// Fixed with a variable
var introductions = [],
  names = ['Karl', 'Friedrich', 'Gauss'];

for (var i = 0; i < 3; i++) {
  (function() {
    var ii = i;
    introductions[ii] = function(soAndSo) {
      return "Hello, " + soAndSo + ", my name is " + names[ii]
    }
  })()
}

var counter = (function() {
  var value = 0;
  return function() {
    return value++
  }
})();

var modulo = (function() {
  //private state  
  //private functions  
  return {
    //public state    
    //public variables  
  }
})();