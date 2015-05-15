// Ok
var introductions = [],
  names = ['Karl', 'Friedrich', 'Gauss'];

for (var i = 0; i < 3; i++) {
  introductions[i] = "Hello, my name is " + names[i]
}

// Problems, why? -> i is the culprit!
var introductions = [],
  names = ['Karl', 'Friedrich', 'Gauss'];

for (var i = 0; i < 3; i++) {
  introductions[i] = function(soAndSo) {
    return "Hello, " + soAndSo + ", my name is " + names[i]
  }
}

introductions[0]("koko"); // => 'Hello, koko, my name is undefined'
i // => 3

// Fixed with a "let"
var introductions = [],
  names = ['Karl', 'Friedrich', 'Gauss'];

for (var i = 0; i < 3; i++) {
  (function(i) {
    introductions[i] = function(soAndSo) {
      return "Hello, " + soAndSo + ", my name is " + names[i]
    }
  })(i)
}

introductions[0]("koko"); // => 'Hello, koko, my name is Karl'

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

introductions[0]("koko"); // => 'Hello, koko, my name is Karl'