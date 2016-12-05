var ancestry = require('./ancestry.js');

ancestry = JSON.parse(ancestry);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.

function centuryAndAge(array) {
	var century, age, centuries = {};
	for (var i = 0; i < array.length; i++) {
		century = Math.ceil(array[i].died / 100);
		age = array[i].died - array[i].born;
		if (centuries.hasOwnProperty(century)) {
			centuries[century].push(age);
		} else {
			centuries[century] = [];
			centuries[century].push(age);
		}
	}

	return centuries;
}

var ageByCentury = centuryAndAge(ancestry);

for (var century in ageByCentury) {
	console.log(century + ':' + average(ageByCentury[century]));
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94