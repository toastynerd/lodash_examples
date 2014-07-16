var _ = require('lodash');
var numbers = [1,2,3,4,5,6,7,8,9,10];

var result = _.map(numbers, function(num) {
  return num * 2;
});

console.log(result);
