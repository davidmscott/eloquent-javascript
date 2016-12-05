function every(array, funct) {
	for (var i = 0; i < array.length; i++) {
		if (!funct(array[i])) {
			return false;
		}
	}

	return true;
}

function some(array, funct) {
	for (var i = 0; i < array.length; i++) {
		if (funct(array[i])) {
			return true;
		}
	}

	return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false