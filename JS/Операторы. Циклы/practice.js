// ОПЕРАТОРЫ

// 1. Получить два числа (через prompt), 
// вывести в консоль большее из них.

// let first = +prompt("введите первое число");
// let second = +prompt("введите второе число");

// if (first > second) {
// 	console.log("число " + first + " больше");
// } else if (first < second) {
// 	console.log("число " + second + " больше");
// } else if (first === second) {
// 	console.log("числа равны");
// } else {
// 	console.log("вы ввели не число")
// }

// 2. Получить два числа, вывести в консоль знак
// их произведения.

// let first = +prompt("введите первое число");
// let second = +prompt("введите второе число");
// let amount = first + second;

// if (amount > 0) {
// 	console.log("+");
// } else if (amount < 0) {
// 	console.log("-");
// } else {
// 	console.log("вы ввели не число");
// }

// 3. Получить три числа,
// вывести их в консоль в порядке возрастания.


// let x = +prompt("введите первое число");
// let y = +prompt("введите второе число");
// let z = +prompt("введите третье число");

// let min;

//  if (x < y && x < z) {
//  	console.log(x);
//  	if (y < z) {
//  		console.log(y);
//  		console.log(z);
//  	} else {
//  		console.log(z);
//  		console.log(y);
//  	}
//  }	else if (y < x && y < z) {
//  	console.log(y);
//  	if (x < z) {
//  		console.log(x);
//  		console.log(z);
//  	} else {
//  		console.log(z);
//  		console.log(x);
//  	}
//  }	else {
//  	console.log(z)
//  	if (x < y) {
//  		console.log(x);
//  		console.log(y);
//  	} else {
//  		console.log(y);
//  		console.log(x);
//  	}
//  }


// 4. Переписать задачу 1,
// заменив if на тернарный оператор.
// Получить два числа (через prompt), 
// вывести в консоль большее из них.

// let first = +prompt("введите первое число");
// let second = +prompt("введите второе число");

// (first > second) ? console.log("число " + first + " больше") : 
// (second > first) ? console.log("число " + second + " больше") :
// (second === first) ? console.log("числа равны") : console.log("вы ввели не число");


// 5. Получить число. Используя switch, 
// вывести в консоль сообщение: для чисел от 1 до 5 
// – разные, для остальных – одинаковое.

// let mood = +prompt("Оцените ваше настроение от 1 до 5")

// switch (mood) {
// 	case 1:
// 		console.log("Вы в печале");
// 		break;
// 	case 2:
// 		console.log("Ещё не всё потеряно");
// 		break;
// 	case 3:
// 		console.log("Самое время подумать о жизни");
// 		break;
// 	case 4:
// 		console.log("Вы на правильном пути");
// 		break;
// 	case 5:
// 		console.log("Так держать!!!");
// 		break;
// 	default:
// 	    console.log("Вы сошли с ума...");
// }



// ЦИКЛЫ

let x = +prompt("Введите любое число");

// 1. Вывести в консоль все простые числа от 2 до x.

for (let i = 2; i <= x; i++) {
	let j;
	for (j = 2; j < i; j++) {
		if (!(i % j)) {
			break;
		}
	}
	if (j == i) {
		console.log(j);
	}
}

// 2. Вывести в консоль все чётные числа от x до 0 
// (в порядке убывания).

// for (let i = x; i >= 1; i--) {
// 	if (i % 2 == 0) {
// 		console.log(i);
// 	}
// }

// 3. Переписать задачу 1 или задачу 2, 
// используя while вместо for (или наоборот, 
// если использовали while).

// let i = x;

// while (i >= 1) {
// 	if (i % 2 == 0) {
// 		console.log(i);
// 	}
// 	i--;
// } 
