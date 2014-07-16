var _ = require('lodash');
var numbers = {a: 1, b: 2, c: 3};

var result = _.map(numbers, function(value, key) {
  console.log('key: ' + key);
  return value * 2;
});

console.log('Final Result:');
console.log(result);
