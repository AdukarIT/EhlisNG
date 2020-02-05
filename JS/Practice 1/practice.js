// 1. Создайте функцию, которая принимает три числа: 
// два первых должны быть длиной сторон катетов 
// прямоугольного треугольника, а третье – длиной 
// гипотенузы. Функция возвращает true, если такой 
// прямоугольный треугольник возможен, и false, если нет.

// function rightTriangle(a, b, c) {

//     if (a > 0 && b > 0 && c > 0) {
// 		if((c * c == a * a + b * b) == true) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	} else {
// 		return "Вы ввели некоректные данные";
// 	}
// }

// console.log(rightTriangle(3, 4, 5));

// 2. Создайте функцию repeat(str, n), которая возвращает 
// строку, состоящую из n повторений строки str. 
// По умолчанию n=2, str — пустая строка.

// function repeat(str = "", n = 2) {
// 	let res = "";
	
// 	for(let i = 1; i <= n; i++) {
// 		res = res + str;
// 	}
// 	return res;
		
// }

// console.log(repeat());

// 3. Создайте функцию, которая принимает два аргумента 
// – количество учеников в классе и количество парт 
// в кабинете. Функция возвращает строку вида 
// «не хватает 2 парт» / «1 лишняя парта».

// function numberOfDesk (a, b) {
// 	let x = Math.ceil(a / 2);

// 	if (x == b) {
// 		return "достаточно парт"
// 	} else if (x > b) {
// 		return "не хватает " + (x - b) + " парт"
// 	} else {
// 		return (b - x) + " - лишняя парта"
// 	}
// }

// console.log(numberOfDesk(40,18));

// 4. Создайте функцию, которая получает в качестве 
// аргумента оценку по 10-балльной шкале. 
// Для ошибочных аргументов (0, «B») функция 
// возвращает текстовую ошибку, для верных – их 
// текстовое описание: 
// https://en.wikipedia.org/wiki/Academic_grading_in_Belarus

// function grade(x) {
// 	switch(x = +prompt("Введите вашу оценку от 1 до 10")) {
// 		case 1:
// 		case 2:
// 		    return "Low";
// 		    break;
// 		case 3:
// 		case 4:
// 		    return "Satisfactory";
// 		    break;
// 		case 5:
// 		case 6:
// 		    return "Average";
// 		    break;
// 		case 7:
// 		case 8:
// 		    return "Good";
// 		    break;
// 		case 9:
// 		case 10:
// 		    return "High";
// 		    break;
// 		default:
// 		    return "Вы ввели неверные данные"                    
// 	}
// }

// console.log(grade());

// 5. Используя цикл do..while, создайте функцию, 
// которая принимает числа через prompt(), пока не 
// будет введено число 0.

// function zero() {
// 	do {
// 		let x = +prompt("Введите число");
// 	} while (x != 0);
// }

// console.log(zero());

// 6. Перепишите функцию из задачи 5 так, чтобы она 
// принимала числа, пока их сумма остаётся меньше 100, 
// выводила эту сумму в консоль, а возвращала количество 
// ведённых чисел.

// function sum() {
// 	let i = 0;
// 	let y = 0;
// 	do {
// 		x = +prompt("Введите число");
// 		y = y + x;
// 		console.log(y);
// 		i++
// 	} while (y < 100);

// 	return(i);
// }

// console.log(sum());

// 7. Создайте функцию, которая принимает число в 
// качестве аргумента и проверяет, является ли это число 
// простым.

// function simpleNumber() {
// 	let x = +prompt("Введите число больше 1")

// 	if (x > 1) {
// 		if (x == 2 || x == 3 || x == 5 || x == 7) {
// 			console.log(x + " - простое число");
// 		} else if (x % 2 == 0 || x % 3 == 0 || x % 5 == 0 || x % 7 == 0) {
// 			console.log(x + " - не простое число");
// 		} else {
// 			console.log(x + " - простое число");
// 		}
// 	} else {
// 		console.log("Вы ввели неверное число");
// 	}
// }

// console.log(simpleNumber());

// 8. Создайте функцию, которая принимает в качестве 
// аргумента целое число, соответствующее порядковому 
// номеру месяца. Если месяц с таким номером существует, 
// функция возвращает имя сезона (лето, осень, зима, весна), 
// к которому относится месяц. Если нет –сообщение об 
// ошибке.

// function numberOfMonth() {
// 	let x = +prompt("Введите номер месяца");

// 	switch(x) {
// 		case 1:
// 		case 2:
// 		case 12:
// 		    return "это зима";
// 		    break;
// 		case 3:
// 		case 4:
// 		case 5:
// 		    return "это весна";
// 		    break;
// 		case 6:
// 		case 7:
// 		case 8:
// 		    return "это лето";
// 		    break;
// 		case 9:
// 		case 10:
// 		case 11:
// 		    return "это осень";
// 		    break;
// 		default:
// 		    return "такого месяца не существует";             
// 	}
// }

// console.log(numberOfMonth());

// 9. Создайте функцию, которая выводит в консоль числа 
// от 10 до 99, заканчивающиеся на 7 или делящиеся на 7 
// (в убывающем порядке).

// function numberOfSeven() {
// 	for (let i = 99; i >= 10; i--) {
// 		if(i % 7 == 0 || i % 10 == 7) {
// 			console.log(i);
// 		}
// 	}
// }

// console.log(numberOfSeven());

// 10. Создайте функцию, которая для чисел от 2 до 20 
// выводит в консоль все их делители.

// function divider() {
// 	for (let i = 2; i <= 20; i++) {
// 		for (let j = 1; j <= 20; j++) {
// 			if (i % j == 0)
// 			console.log(j);
// 		}
// 	}
// }

// console.log(divider());

// 11. Решите задачу 10 в общем виде: вместо 2 и 20 – 
// аргументы x и y.

// function divider(a, b) {
// 	for (let i = a; i <= b; i++) {
// 		for (let j = 1; j <= b; j++) {
// 			if (i % j == 0) {
// 				console.log(j);
// 			}
// 		}
// 	}
// }

// console.log(divider(3, 7));

// 12. Создайте функцию с параметрами size (число) и 
// unit (строка). В unit передаются единицы измерения 
// информации («Кб», «Мб», «Гб»), в size – количество 
// таких единиц. Функция возвращает количество байт в 
// size.

// function numberOfBytes() {
// 	let size = +prompt("Введите кол-во");
// 	let unit = +prompt("Введите единицу измерения информации (1-Кб, 2-Мб, 3-Гб)");

// 	switch(unit) {
// 		case 1:
// 		    return unit * 10**3;
// 		    break;
// 		case 2:
// 		    return unit * 10**6;
// 		    break;
// 		case 3:
// 		    return unit * 10**9;
// 		    break;
// 		default:
// 		    return "вы ввели что-то не верно";          
// 	}
// }

// console.log(numberOfBytes());

// 13. Создайте функцию, которая ищет наибольший общий 
// делитель двух чисел.

// function commonDivider(a = 35, b = 49) {
// 	for(let i = a; i >= 1; i--) {
// 		if (a % i == 0 && b % i == 0) {
// 			return i;
// 		}
// 	}
// }

// console.log(commonDivider());

// 14. Решите задачу 13 через рекурсию.

// function getBigDivider(a, b) {
// 	if (a == 0) {
// 		return b;
// 	} else {
// 		return getBigDivider(b % a, a);
// 	}
// }

// console.log(getBigDivider(35, 49));


// 15. Создайте функцию words(),  которая в зависимости 
// от переданного в нее целого числа n, будет выводить 
// слово «карандаш» в правильной форме («12 карандашей», 
// но «22 карандаша»).

// function words(n) {
// 	let x = " карандаш";
// 	n = +prompt("Введите количество карандашей");

// 	if (n >= 0) {
// 		if (n % 10 == 1 && n != 11) {
// 			console.log(n + x);
// 		} else if (n % 10 == 0 || n >= 11 && n <= 14 || n % 10 >= 5 && n % 10 <=9) {
// 			console.log(n + x + "ей");
// 		} else {
// 			console.log(n + x + "а");
// 		}
// 	} else {
// 		console.log("Вы ввели некоректные данные");
// 	}	
// }

// console.log(words())

// 16. Создайте функцию, которая проверяет, можно ли 
// представить число в виде суммы квадратов двух целых 
// однозначных чисел.

function sum(x) {
	x = +prompt("Введите число");

	if (x > 0) {
		for (let i = 1; i < x; i++) {
			if (x == i**2 + i**2)
			console.log(x + " - сумма квадратов двух " + i);
		}
	}
}

console.log(sum());