var h = 5;

(function(x) {
  // env -> {x: 2, '..': {h: 5}}
  return function(y) {
    // env -> {y: 3, '..': {x: 2, '..': {h: 5}}}
    return function(z) {
      // env -> {z: 4, '..': {y: 3, '..': {x: 2, '..': {h: 5}}}}
      return x + y + z + h;
    }
  }
})(2)(3)(4);