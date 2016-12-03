function arrayToList(array) {
	var rest;

	for (var i = array.length - 1; i >= 0; i--) {
		if (!rest) {
			rest = {
				value: array[i],
				rest: null
			};
		} else {
			rest = {
				value: array[i],
				rest: rest
			};
		}
	}

	return rest;
}

console.log(arrayToList([1, 2, 3]));

var list = arrayToList([1, 2, 3]);

function listToArray(rest) {
	var array = [];

	while (rest !== null) {
		array.push(rest.value);
		rest = rest.rest;
	}

	return array;
}

console.log(listToArray(list));

function prepend(value, list) {
	return {
		value: value,
		rest: list
	};
}

console.log(prepend(7, list));

function nth(rest, number) {
	for (var i = 1; i <= number; i++) {
		if (number === i) {
			return rest.value;
		} else {
			if (rest.rest) {
				rest = rest.rest;
			} else {
				return undefined;
			}
		}
	}
}

console.log(nth(list, 3));
console.log(list);

function nthRecursive(rest, number) {
	if (number === 1) {
		return rest.value;
	} else {
		if (rest.rest) {
			return nthRecursive(rest.rest, number - 1);
		} else {
			return undefined;
		}
	}
}

console.log(nthRecursive(list, 3));