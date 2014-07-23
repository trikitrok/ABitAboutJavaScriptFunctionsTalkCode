var counter = (function() {
  var value = 0;

  return function() {
    return value++
  }
})();