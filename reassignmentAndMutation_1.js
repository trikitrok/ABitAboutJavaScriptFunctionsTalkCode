// Two aliases in same environment
var allHallowsEve = [2012, 10, 31]
var halloween = allHallowsEve;

// The same two in two different environments (call by sharing)
var allHallowsEve = [2012, 10, 31];
(function(halloween) {
  // ...
})(allHallowsEve);

// Rebinding halloween to a different value
var allHallowsEve = [2012, 10, 31];
(function(halloween) {
  halloween = [2013, 10, 31];
  halloween[0] = 10;
})(allHallowsEve);

console.log(allHallowsEve);

// Mutating halloween value
var allHallowsEve = [2012, 10, 31];
(function(halloween) {
  halloween[0] = 2013;
})(allHallowsEve);