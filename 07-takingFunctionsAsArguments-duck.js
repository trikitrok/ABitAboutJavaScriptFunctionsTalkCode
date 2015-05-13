var justQuacking = function() {
    console.log("Quack!");
  },
  squeaking = function() {
    console.log("Squeak!");
  },
  muteQuacking = function() {
    console.log("<< Silence >>");
  },
  quack = function(howToQuack) {
    howToQuack();
  };

quack(justQuacking);

quack(squeaking);

quack(muteQuacking);

quack(function() {
  console.log("Quack!Quack!Quack!Quack!Quack!Quack!");
});

var times = function(n, fn) {
  var i;
  for (i = 0; i < n; i++) {
    fn();
  }
};

quack(function insistentQuacking() {
  times(10, justQuacking);
});