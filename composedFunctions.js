var composedFunction = function() {
  doSomething();
  doSometringElse();

  function doSomething() {
    console.log("something is done");
  };

  function doSomethingElse() {
    console.log("something else is done");
  };
};
