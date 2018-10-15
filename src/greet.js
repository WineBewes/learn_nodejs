'use strict';

var greet = function(name) {
	name = name ? name : 'world';
	return 'Hello ' + name + '!';
};

module.exports = greet;