function reverseArray(array) {
	var newArray = [];

	for (var i = array.length - 1; i >= 0; i--) {
		newArray.push(array[i]);
	}

	return newArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

function reverseArrayInPlace(array) {
	for (var i = 0; i < array.length; i++) {
		array.unshift(array[i]);
		array.splice(i+1, 1);
	}

	return array;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));