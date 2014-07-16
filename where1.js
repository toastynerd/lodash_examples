var _ = require('lodash');
var objects = [{firstName: 'Ford', lastName: 'Prefect', occupation: 'Writer for The Guide'},
               {firstName: 'Arthur', lastName: 'Dent', occupation: 'Radio Advertising'},
               {firstName: 'Zaphod', lastName: 'Beeblebrox', occupation: 'President of the Galaxy'},
               {firstName: 'Trillian', occupation: 'Reporter'},
               {firstName: 'Arthur', lastName: 'Weasley', occupation: 'Misuse of Muggle Artifacts'}];

var ford = _.where(objects, {firstName: 'Ford'});
var arthurs = _.where(objects, {firstName: 'Arthur'});

console.log(ford);
console.log(arthurs);
