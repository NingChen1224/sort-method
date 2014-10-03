
var bubbleMethod = require('../src/bubble-sort'),
	insertMethod = require('../src/insert-sort'),
	selectMethod = require('../src/select-sort');

exports = module.exports = sort;

var sort = {
	bubble : bubbleMethod,
	insert : insertMethod,
	select : selectMethod
};