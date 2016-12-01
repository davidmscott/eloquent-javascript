function isEven(number) {
	if (number === 1) {
		return false;
	} else if (number === 0) {
		return true;
	} else if (number < 1 && number > -1) {
		return false;
	} else {
		if (number > 0) {
			number -= 2;
		} else {
			number +=2;
		}
		return isEven(number);
	}
}

var number = 75;
console.log('isEven(%s) =', number, isEven(number));