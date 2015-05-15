// Duck
var Duck = function(oQuackBehavior) {
  this.oQuackBehavior = oQuackBehavior;
};

Duck.prototype.setQuackBehavior = function(oQuackBehavior) {
  this.oQuackBehavior = oQuackBehavior;
};

Duck.prototype.quack = function() {
  this.oQuackBehavior.quack();
};

// QuackBehavior
var QuackBehavior = function() {};

QuackBehavior.prototype.quack = function() {
  throw new Error("This method must be overwritten");
};

// Quack implementation of QuackBehavior
var Quack = function() {
  QuackBehavior.apply(this);
};

Quack.prototype = new QuackBehavior();

Quack.prototype.quack = function() {
  console.log("Quack!");
};

// MuteQuack implementation of QuackBehavior
var MuteQuack = function() {
  QuackBehavior.apply(this);
};

MuteQuack.prototype = new QuackBehavior();

MuteQuack.prototype.quack = function() {
  console.log("<< Silence >>");
};

// Squeak implementation of QuackBehavior
var Squeak = function(){
  QuackBehavior.apply(this);
};

Squeak.prototype = new QuackBehavior();

Squeak.prototype.quack = function(){
  console.log("Squeak!");
};

var duck = new Duck(new Quack());
duck.quack();

duck.setQuackBehavior(new Squeak());
duck.quack();

duck.setQuackBehavior(new MuteQuack());
duck.quack();