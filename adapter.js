['1', '2', '3'].map(parseInt);
// => [ 1, NaN, NaN ]

['1', '2', '3'].map(
  function(element, index, arr) {
    console.log({element: element, index: index, arr: arr});
  }
);
// => { element: '1', index: 0, arr: [ '1', '2', '3' ] }
//    { element: '2', index: 1, arr: [ '1', '2', '3' ] }
//    { element: '3', index: 2, arr: [ '1', '2', '3' ] }

['1', '2', '3'].map(
  function(element) {
    return parseInt(element);
  }
);
// => [ 1, 2, 3 ]

function unary(fn) {
  if (fn.length === 1) {
    return fn;
  }
  return function(sth) {
    return fn.call(this, sth);
  }
}

['1', '2', '3'].map(unary(parseInt));
// => [ 1, 2, 3 ]