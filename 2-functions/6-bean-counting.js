// function countBs(string) {
// 	var count = 0;

// 	for (var i = 0; i < string.length; i++) {
// 		if (string.charAt(i) === 'B') {
// 			count++;
// 		}
// 	}

// 	return count;
// }

console.log(countBs('Bumble bees are the best: Beyond the fear'));

function countChar(string, char) {
	var count = 0;

	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) === char) {
			count++;
		}
	}

	return count;
}

function countBs(string) {
	return countChar(string, 'B');
}