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