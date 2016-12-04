var ancestry = require('./ancestry.js');

ancestry = JSON.parse(ancestry);
console.log(typeof ancestry);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.

function motherChildAgeDiff(byName) {
	var motherExists = ancestry.filter(function(person){
		return byName[person.mother];
	});

	console.log(motherExists);

	var ageDiff = motherExists.map(function(person) {
		return person.born - byName[person.mother].born;
	});

	console.log(ageDiff);

	return average(ageDiff);
}

console.log(motherChildAgeDiff(byName));

// → 31.2