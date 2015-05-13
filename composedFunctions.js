var composedFunction = function() {
  doSomething();
  doSometringElse();

  function doSomething() {
    console.log("something is done");
  };

  function doSometringElse() {
    console.log("something else is done");
  };
};