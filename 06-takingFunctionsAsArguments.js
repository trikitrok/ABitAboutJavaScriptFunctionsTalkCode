var times = function(n, fn) {
  var i;
  for (i = 0; i < n; i++) {
    fn();
  }
}

times(3, function() {
  console.log('hola koko');
});