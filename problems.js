function multiplesOf3And5(numbers) {
	numbers[3] = numbers[1] * numbers[2];
	var sum = 0;
	for (var i = 0; i < 3; i++) {
		var max = numbers[0] / numbers[i + 1];
		max = (max % numbers[i + 1] === 0) ? max - 1 : Math.floor(max);
		var sum1 = max * (max + 1) / 2 * numbers[i + 1];
		sum += (i < 2) ? sum1 : -sum1;
	}
	return sum;
}

function evenFibonacciSum(limit) {
	var n1 = 1, n2 = 2, sum = 0;
	while (n2 <= limit) {
		if (n2 % 2 === 0) {
			sum += n2;
		}
		n2 += n1;
		n1 = n2 - n1;
	}
	return sum;
}

function largestPrimeFactor(number) {
	while (number % 2 === 0) {
		number /= 2;
	}
	var max = Math.sqrt(number);
	for (var i = 3; i <= max; i += 2) {
		while (number % i === 0) {
			number /= i;
			max = Math.sqrt(number);
		}
	}
	return number;
}
