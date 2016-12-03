function range(start, end, step) {
	if (!step) {
		step = 1;
	}

	var rangeArray = [];

	if (start < end) {
		for (var i = start; i <= end; i += step) {
			rangeArray.push(i);
		}
	}

	if (start > end) {
		for (var i = start; i >= end; i += step) {
			rangeArray.push(i);
		}
	}

	return rangeArray;
}

console.log(range(7, 20));

function sum(array) {
	var sumOfNumbers = 0;

	for (var i = 0; i < array.length; i++) {
		sumOfNumbers += array[i];
	}

	return sumOfNumbers;
}

console.log(sum(range(1, 10)));