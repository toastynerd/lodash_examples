var _ = require('lodash');
var objects = [{one: 'hello', two: 'foo'}, {one: 'world', two: 'bar'}];

var resultOne = _.map(objects, function(elem) {
  return elem.one;
}); 

var resultTwo = _.map(objects, function(elem) {
  return elem.two;
});

console.log(resultOne);
console.log(resultTwo);
