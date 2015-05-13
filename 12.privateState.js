var counter = (function() {
  var value = 0;
  // env -> {value: 0, '..': {}}
  return function() {
    // env -> {'..': {value: 0, '..': {}}}
    return value++
  }
})();