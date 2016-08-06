function multipliesOf3And5s3(numbers) {
	numbers[3] = numbers[1] * numbers[2];
	var max = [];
	var sum = 0;
	for (var i = 0; i < 3; i++) {
		max[i] = numbers[0] / numbers[i + 1];
		max[i] = (max[i] % i === 0) ? max[i] - 1 : Math.floor(max[i]);
		var sum1 = max[i] * (max[i] + 1) / 2 * numbers[i + 1];
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

function largestPrimeNum(number) {
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
