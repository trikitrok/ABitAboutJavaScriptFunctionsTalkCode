/*
  A bit about JavaScript functions
*/

/*
  We'll talk about a subset of JavaScript's functions semantics
  and some idioms based on it.

  This talk focuses in introducing the following concepts:
  functions as first class entities, closures and higher-order functions.

  It's based on some of the readings I've done to learn JavaScript:
    * JavaScript Enlightenment, Cody Lindley
    * JavaScript: The Good Parts, Douglas Crockford
    * JavaScript Allongé, Reginald Braithwaite
    * You Don't Know JS: Scope & Closures, Kyle Simpson

  Most of the examples were taken from Reginald Braithwaite's wonderful book.
*/

/*
  Semantics & Idioms.

    * Semantics -> What do the various language features mean?

    * Idioms -> What are the common approaches to using the language
      features to express computations?
*/

/*
  A function represents a computation to be performed.
*/

/*
  Parts of a function:

    1. The reserved word function.

    2. The function name.
      It's optional.
      If no name is given, the function is said to be anonymous.

    3. The set of parameters of the function, wrapped in parentheses.

    4 The body of the function: a set of statements wrapped in curly braces.
*/

(function() {});

(function f() {});

(function(a, b) {
  return a + b;
});

/*
  Functions are a reference type (as opposed to primitive or value type).
*/

(function() {}) === (function() {});

/*
  Functions are objects.

    They have properties and methods:
      such as, length, arguments, prototype, apply, call,...
*/

/*
  Functions are first class entities <-- !!!

    Functions are values that can be bound to names like any other value,
    passed as arguments, returned from other functions,
    and used wherever other values can be used.
*/

/*
  Applying a function

  We use functions applying them to zero or more values called arguments.

  * If fn_expr is an expression that when evaluated produces a function
  and if args are the arguments.

    This is how the function is applied: fn_expr(args)
*/

/*
  Environment

  * Every time a function is invoked a new environment is created.

  * We can think of this environment as a hash that associates by name
  the variables in the scope to their values.

  * When a variable is associated by name to a value is said
  that the variable is bound to the value.
  Therefore an environment is a set of bindings.

  * When you apply a function to its arguments,
  an entry is placed in the dictionary for each argument.
*/

/*
  Passing arguments

    When any value is passed as an argument to a function,
    the value that gets bound in the function's environment
    must be identical to the original one.
*/

/*
  Call by value

    For primitive types -> JS places a copy of the value in the environment.

    This is called call by value semantics.
*/

/*
  Call by sharing

    For reference types -> JS places a reference to the reference type in the environment.

    When the value needs to be used, JS uses the reference in the environment
    to retrieve the original.

    This is called call by sharing semantics.
*/

/*
  Eager evaluation

    It's an evaluation strategy.

    It means that JS will first evaluate the expressions of the parameters
    and then apply the function to the resulting parameters values.

    The alternative strategy is lazy evaluation.
*/

(function(radius) {
  return 2 * radius;
})(1 + 1 * 5);

/*
  How does invoking a function work?
*/

(function(x) {
  return x;
})(1 + 1);

/*
  Invoking a function (I)

  1. JS parses this whole thing as an expression
  made up of two sub-expressions.

  2. It then starts evaluating each of the sub-expressions.

  3. One of the sub-expressions, function (x) { return x; },
    evaluates to a function.

  4. The other sub-expression, 1 + 1, evaluates to 2.

  5. JS now evaluates the whole expression by applying
    the evaluated function to the argument value.
*/

/*
  Invoking a function (II)

  6. An environment is created -> {'..': {}}.

  7. The value 2 is bound to the name x in the environment ->
    {x: 2, '..': {}}.

  8. The expression x in return x; is evaluated within
    the environment we just created.

  9. The value of a variable like x when evaluated in an environment
    is the value bound to the variable's name in that environment, which is 2.

  10. And that's the value that the function returns (2).
*/

/*
  Function Scope

  * Pre-ES6 JS everything has function scope.

  * Only exception is the catch clause which has block scope since ES3.
*/

/*
  Creating bindings using var.

  * The var keyword allows us to introduce one or more bindings
    in the current function's environment.

  * Any expression can be bound, even functions
  (no surprise here, as they are first-class entities).

  * You can bind more than one name-value pair by separating them by commas.
*/

(function() {
  var foo = 'foo',
    bar = 'bar';
  return foo + bar;
})();

(function(radius) {
  var calcDiameter = function(r) {
    return 2 * r;
  };
  return calcDiameter(radius);
})(2);

/*
  Nested functions -> How do they work?
*/
(function(x) {
  return function(y) {
    return x * y;
  }
})(3)(4)

/*
  Free variables
    A free variable is one that is not bound
    within the function.

  x was a free variable of the inner function
  in the previous example.

  But how come x was equal to 3?
*/

/*
  Lexical scope

  * The body of a function is evaluated in
  the environment where the function was defined,
  not the environment where the function is being called.

  * Also known as static scope.

  * The alternative semantics is dynamic scope.
*/

/*
  Environments chain

  * Whenever a function is applied to some arguments,
  the newly created environment always has a reference
  to its parent environment.

  * JS always searches for a binding starting with
  the functions own environment and then each parent
  in turn until it finds one.

  * Also known as scope chain.

  * The last stop in the scope chain is the global environment.

 See example in environmentChain.js
*/

/*
  Types of lookup in the scope chain.

  * LHS lookup.
    When we are looking for the variable bound to a name.

  * RHS lookup.
    When we are looking for the value of a variable bound to a name.
*/

/*
  What if the binding is not there?

  * LHS lookup.
    a. If not using strict mode.
      A new binding is created in the global environment.
    b. If using strict mode.
      A ReferenceError is thrown.

  * RHS lookup.
    A ReferenceError is thrown.
*/

/*
  Shadowing

    * When a variable has the same name as an ancestor environment's binding,
    it is said to shadow the ancestor binding.

    * If done on purpose, it's often a good thing.

    * If not, you're programming by accident and that can always gets dangerous.

  See example in 02-shadowing.js
*/

// What's the value returned by the function?

/*
  See example in 01-FunctionScope.js
*/

/*
  Hoisting

  See example in hoisting.js
*/

// What gets printed on the console?

/*
  Code Pattern using var

    Declare all your variables at the beginning
    of the function using var, to make your code
    easier to understand

    See example in codePatternUsingVar.js
*/

/*
  Reassignment, mutation, aliasing

  * JS allows you to re-assign the value of variables.

  * Actually what we are doing is rebinding a different value to the same name
   in the same environment.

  * Reference type values can mutate.
  Their identities stay the same, but not their structure/contents.

  * JS’s semantics allow for two different bindings to refer to the same value,
  they are aliases for the same value.

  See examples in 03-ReassignmentAndMutation.js and 04-ReassignmentAndMutation.js
*/

/*
  Closures

  We've been seing then for a while*.

  They are just functions with free variables.

  * See Nested Functions slide.
*/

/*
  Closures
    To be executed a closure needs:
      Function
        +
      Environment where the function was defined

  See example in closures.js
*/

/*
  Some idioms using closures:
    Private state

    See example in 12.privateState.js
*/

/*
  Some idioms using closures:
    Module pattern

    function() {
      //private state
      //private functions
      return {
        //public state
        //public functions
      };
    }

  See example in modulePatternExample.js
*/

/*
  Named functions
*/
var bindingName = function actualName() {};

bindingName.name

/*
  Benefits of using named functions
    * Debugging.
    * Recursion.
*/

/*
  Recursion
*/
var bindingNameForIsEvenFn = function isEvenFnActualName(n) {
  if (n === 0) {
    return true;
  } else {
    return !bindingNameForIsEvenFn(n - 1);
  }
}

// TODO -> See example Js Allongé

/*
  Function Declaration (I)

    function name () {
    }

  It's like doing:

    var name = function name () {
    };

  The difference is that the function binding is hoisted
  to the top of the enclosing scope.
*/

/*
  Function Declaration (II)

    It facilitates a certain style of programming where
    you can put the main logic at the top,
    and the helper functions at the bottom:

  See example in composedFunctions.js
*/

/*
  Block Scope in ES6 using let
*/
// Pre ES6
(function(x, y) {
  var gamma = 3;
  if (x > y) {
    var gamma = 1 + y;
    console.log(gamma * x);
  }

  console.log(gamma);
})(2, 1);

// ES6 example executed in Chrome using ScratchJs
(function(x, y) {
  var gamma = 3;
  if (x > y) {
    let gamma = 1 + y;
    console.log(gamma * x);
  }

  console.log(gamma);
})(2, 1);

// Another ES6 let example executed in Chrome using ScratchJs
var introductions = [],
  names = ['Karl', 'Friedrich', 'Gauss'];

for (let i = 0; i < 3; i++) {
  introductions[i] = function(soAndSo) {
    return "Hello, " + soAndSo + ", my name is " + names[i]
  }
}

/*
  Using Block Scope in pre-ES6
    You can polyfill block scope in pre-ES6
    using Traceur.

    Traceur is a traspiler of ES6 features into
    pre-ES6 (mostly ES5, but not all!) for
    general usage.

    It's actually what ScratchJs is using
    behind the scenes.
*/

/*
  Dynamic Scope (material for another talk some day)
    * this

    * arguments
*/

/*
  Recap.

  * JS functions are first class entities (in fact, they are objects).
    This means that they can be computed, passed, stored, etc,
    wherever other values can be computed, passed, stored, etc.

  * Function scope

  * Everything follows lexical scope semantics except this and arguments
    which follow dynamic scope.

  * There is a scope chain.
*/

/*
  Higher-order functions
*/

/*
  Higher-order functions
    Functions that take or/and return other functions.

  They are a powerful mean of abstraction,
  because they can abstract both control flow and
  algorithms that use other algorithms.
*/

/*
  Passing functions as arguments
*/
var times = function(n, fn) {
  var i;
  for (i = 0; i < n; i++) {
    fn();
  }
}

times(3, function() {
  console.log('hola koko');
});

/*
  It's all about composition

  Strategy pattern example
    See http://garajeando.blogspot.com.es/2014/01/strategy-pattern-and-higher-order.html
    See wrong_strategy.js
    See 07-takingFunctionsAsArguments-duck.js
*/

/*
  The importance about pattens...
  TODO -> get quote from Js Allongé
*/

/*
  Applicative programming

  Pattern of defining a function that takes a function and
  then invokes that function for each element in a collection.

  This pattern is fundamental because it split the traversal of the
  data structure from the data processing done on elements.

  These higher-order functions abstract typical flows.
*/

/*
  Applicative programming most known examples:
    map, filter, reduce

  But there are many more.

  Take a look at underscore or lodash libraries.
*/

/*
  Creating functions
*/

/*
  3 basic strategies
    * Compose
    * Partial application
    * Currying
*/

/*
  Composition

  See 13-composition.js
*/

/*
  Partial application

    It refers to the process of fixing a number of arguments of a function,
    producing another function with a smaller number of arguments.

    See partialApplication.js
*/

/*
  Currying

    Currying is the process of taking a function that
    takes multiple arguments and transforming it into
    a chain of single arguments functions.

    See 09-currying.js and currying-builders.js
*/

/*
  Decorators

  A function decorator is a higher-order function that takes
  one function as an argument and returns another function
  which is a variation of the function passed as an argument.

    See 15-decorator.js
*/

function not(fn) {
  return function(argument) {
    return !fn(argument)
  }
}

/*
  Adapters

  A function adapter is a higher-order function that takes
  one function as an argument and returns another function
  which adapts the function passed as an argument to a
  different signature.

  TODO: add example with parseInt and forEach
*/

/*
  There's so much more to see!

  Important things we didn't see in this talk:
    this
    Functions prototype property
    Prototype chain
    Functions as constructors
    Functions apply and call methods

  In another talk some day.
*/

/*
  Thanks for listening!
*/