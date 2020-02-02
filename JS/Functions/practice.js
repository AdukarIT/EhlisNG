// 1. Напишите функцию, которая получает 
// три числа и возвращает их сумму.

// function sumOfNumbers (x, y, z) {
//     return x + y + z;	
// }

// console.log(sumOfNumbers (2, 6, 1));

// 2. Напишите функцию, которая подсчитывает сумму 
// чисел от 1 до заданного X.

// function sumOfNumbers() {
// 	let x = +prompt("Введите число");
// 	let sum = 0;

// 	for(i = 1; i <= x; i++) {
// 		sum = sum + i;
// 	}

// 	return sum;
// }

// console.log(sumOfNumbers())

// 3. Напишите функцию, которая подсчитывает сумму 
// цифр числа.

function sumOfDigist(x) {
	let sum = 0;

	do {
		let z = x % 10;
		x = (x - z) / 10;
		sum = sum + z
	} while (x > 0);

	return sum;
}

console.log(sumOfDigist(1986));


// 4. Напишите функцию, которая считает факториал числа.

// function factorialOfNumber(x) {
// 	let factorial = 1;

// 	for(i = 1; i <= x; i++) {
// 		factorial = factorial * i;
// 	}

// 	return factorial;
// }

// console.log(factorialOfNumber(6));