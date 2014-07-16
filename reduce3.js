var _ = require('lodash');
var numbers = {a: 1, b:2, c:3};

var mapped = _.reduce(numbers, function(result, value, key) {
  result[key] = value * 2;
  return result;
}, {});

console.log(mapped);
