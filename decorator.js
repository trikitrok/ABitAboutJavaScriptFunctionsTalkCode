function complement(fn) {
  return function() {
    return !fn.apply(this, arguments);
  };
}

var equal = function(a,b) {return a===b;};

var notEqual = complement(equal);


function maybe(fn) {
  return function() {
    var i;

    if (arguments.length === 0) {
      return;
    } else {
      for (i = 0; i < arguments.length; ++i) {
        if (arguments[i] == null) {
          return;
        }
      }
      return fn.apply(this, arguments);
    }
  }
}

function Model() {};

Model.prototype.setSomething = maybe(function(value) {
  this.something = value;
});