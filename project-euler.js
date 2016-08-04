function multipliesOf3And5s1(limit) {
	var sum = 0;
	for (var i = 0; i < limit; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
}

function multipliesOf3And5s2(limit) {
	var sum = 0, limit3 = limit / 3, limit5 = limit / 5, x = 0;
	for (var i = 1; i < limit3; i++) {
		x = i * 5;
		if (i < limit5 && x % 3 !== 0) {
			sum += x;
		}
		sum += i * 3;
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

function largestPrimeNums1(number) {
	var max1 = Math.sqrt(number), maxPrime = number;
	for (var i = 2; i <= max1; i++) {
		if (number % i === 0) {
			var primeCheck = number / i, max2 = Math.sqrt(primeCheck), max3 = Math.sqrt(i);
			for (var j = 2; j <= max2 && primeCheck % j !== 0; j++);
			if (j > max2) {
				return primeCheck;
			}			
			for (var k = 2; k <= max3 && i % k !== 0; k++);
			if (k > max3) {
				maxPrime = i;
			}
		}
	}
	return maxPrime;
}

function largestPrimeNums2(number) {
	var max = Math.sqrt(number);
	for (var i = 2; i <= max; i++) {
		while (number % i === 0) {
			number /= i;
			max = Math.sqrt(number);
		}
	}
	return number;
}
