function deepEqual(value1, value2) {
	if (value1 === value2) {
		return true;
	}

	if (typeof value1 !== 'object' || typeof value2 !== 'object' || value1 === null || value2 === null) {
		return false;
	}

	var value1PropCount = 0, value2PropCount = 0;

	for (var prop in value1) {
		value1PropCount++;
	}

	for (var prop in value2) {
		value2PropCount++;
		if (!(prop in value1) || !deepEqual(value1[prop], value2[prop])) {
			return false;
		}
	}

	return value1PropCount === value2PropCount;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj) === true);
console.log(deepEqual(obj, {here: 1, object: 2}) === false);
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}) === true);