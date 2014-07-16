var _ = require('lodash');
var numbers = [1,2,3,4,5,6,7,8,9,10];

var resultMap = _.map(numbers, function(num) {
  return num * 2;
});

var resultFinal = _.reduce(resultMap, function(sum, num) {
  return sum += num;
});

console.log(resultFinal);
