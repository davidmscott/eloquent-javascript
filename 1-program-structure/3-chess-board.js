var str = '';
var black = false;
var size = 8;

for (var i = 0; i < size; i++) {
	for (var j = 0; j < size; j++) {
		if (black) {
			str += '#';
		} else {
			str += ' ';
		}
		black = !black;
	}
	str += '\n';
	black = !black;
}

console.log(str);