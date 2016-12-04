var arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arrays) {
	var array = [];
	for (var i = 0; i < arrays.length; i++) {
		array = array.concat(arrays[i]);
	}

	return array;
}

console.log(flatten(arrays));