var _ = require('lodash');
var objects = [{a: true, b: false}, {a: false}, {b: true}, {a: true, c: true}];

var results = _.filter(objects, 'a');

console.log(results);
