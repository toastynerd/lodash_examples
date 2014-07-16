var _ = require('lodash');
var objects = [{one: 'hello', two: 'foo'}, {one: 'world', two: 'bar'}];

var resultsOne = _.pluck(objects, 'one');
var resultsTwo = _.pluck(objects, 'two');

console.log('resultsOne:');
console.log(resultsOne);
console.log('resultsTwo:');
console.log(resultsTwo);
