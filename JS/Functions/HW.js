// 1. Создайте функцию, которая получает в качестве 
// аргументов три числа и возвращает наименьшее из них.

// function minNumber (a, b, c) {
// 	if(a < b && a < c) {
// 		return a;
// 	} else if(b < a && b < c) {
// 		return b;
// 	} else {
// 		return c;
// 	}
// }

// console.log(minNumber(1, 3, 6));

// 2. Создайте функцию, которая получает в качестве 
// аргументов значения суток, часов и минут, 
// а возвращает соответствующее им количество секунд.

// function seconds(a, b, c) {
// 	let sec = a * 86400 + b * 3600 + c * 60;
// 	return sec;
// }

// console.log(seconds(2, 5, 36));

// 3. Напишите рекурсивную функцию для подсчёта 
// факториала числа.

// function recursiveFactorial(x) {
// 	if(x === 1) {
// 		return 1;
// 	}
// 	return x * recursiveFactorial(--x);
// }

// console.log(recursiveFactorial(5));

// 4. Напишите рекурсивную функцию, которая разворачивает 
// введённое число задом наперёд. Например, 
// если на вход функция получает 1234, вернуть 
// она должна 4321.

// function reverseNumber(x) {
// 	if (x < 10) {
// 		return x;
// 	}

// 	let a = x % 10;
// 	x = (x - a) / 10;

// 	for (let i = x; i >= 1; i = i / 10) {
// 		a = a * 10;
// 	}
// 	return a + reverseNumber(x);
// }	

// console.log(reverseNumber(123456789));

// 5. Напишите функцию для решения квадратных уравнений. 
// В качестве параметров она должна принимать 
// коэффиценты a, b и c, возвращать – количество корней. 
// Сами корни уравнения (или информацию о их отсутствии) 
// функция должна выводить в консоль. 
// Примечание: 
// 1. Ищем только решения в действительных 
// числах, комплексные не нужны! Примечание 
// 2. Для получения квадратного корня используйте 
// стандартную функцию JS: Math.sqrt().

function res(a, b, c) {
	let D = b * b - 4 * a * c;
	let x1;
	let x2;

	if(D > 0) {
		x1 = (-b + Math.sqrt(D)) / (2 * a);
		x2 = (-b - Math.sqrt(D)) / (2 * a);
	} else if (D == 0) {
		x1 = -b / (2 * a);
		x2 = "";
	} else {
		x1 = "no decision";
		x2 = "";
	}

	let decision = x1 + " " + x2;

		return decision
} 

console.log(res(1, -8, 12));