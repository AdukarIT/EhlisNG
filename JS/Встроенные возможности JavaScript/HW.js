// 1. Напишите функцию, которая принимает массив случайных 
// чисел (см. задачу 2 в практике) и создаёт на его основе 
// новый. Элементы нового массива – объекты вида 
// {initial: num1, sqrt: num2, floor: boolean1, 
// ceil: boolean2}. initial – значение элемента исходного 
// массива с тем же индексом, sqrt – корень квадратный из 
// этого значения. Если округление sqrt по обычным 
// математическим правилам сходится с его округлением 
// через floor, то floor = true, а ceil = false. 
// Если сходится с округлением через ceil - наоборот. 
// Например, пусть у исходного массива arr[0] = 19, 
// тогда в новом массиве newArr[0] = {initial: 19, 
// sqrt: 4.358898943540674, floor: true, ceil: false}.

// let arr = [];

// function newArr(len, min, max) {
// 	for (let i = 0; i < len; i++) {
// 		arr[i] = Math.floor(Math.random() * (max - min + 1)+ min);
// 	}
// 	return arr;
// }

// console.log(newArr(20, 1, 50));

// function randomNum (num1) {
// 	let sqrtArr = {
// 		initial: num1, 
// 		sqrt: Math.sqrt(num1), 
// 		floor: Math.round(Math.sqrt(num1)) == Math.floor(Math.sqrt(num1)), 
// 		ceil: Math.round(Math.sqrt(num1)) == Math.ceil(Math.sqrt(num1))
// 	}

// 	console.log(sqrtArr);
// }

// randomNum(arr[0]);

// 2. Добавьте в каждый элемент массива из задачи 1 ещё 
// одно свойство: значение sqrt, округлённое до сотых.

// let arr = [];

// function newArr(len, min, max) {
// 	for (let i = 0; i < len; i++) {
// 		arr[i] = Math.floor(Math.random() * (max - min + 1)+ min);
// 	}
// 	return arr;
// }

// console.log(newArr(20, 1, 50));

// function randomNum (num1) {
// 	let sqrtArr = {
// 		initial: num1, 
// 		sqrt: Math.sqrt(num1), 
// 		floor: Math.round(Math.sqrt(num1)) == Math.floor(Math.sqrt(num1)), 
// 		ceil: Math.round(Math.sqrt(num1)) == Math.ceil(Math.sqrt(num1))
// 	}

// 	sqrtArr.sqrt2 = +Math.sqrt(num1).toFixed(2) 

// 	console.log(sqrtArr);
// }

// randomNum(arr[0]);


// 3. Напишите функцию, которая определяет, является ли 
// строка палиндромом.

// function palindrome (str) {
// 	for (let i = 0; i < Math.floor(str.length / 2); i++) {
// 		if(str.charAt(i) == str.charAt(str.length - 1 - i)) {
// 			return "строка '" + str + "' является палиндромом"
// 		} else {
// 			return "строка '" + str + "' не является палиндромом"
// 		}
// 	}
// }

// console.log(palindrome("а топот а"));

// function palindrome (str) {
// 	let newStr = str.split("").reverse().join("");
// 	if (str == newStr) {
// 		return "строка '" + str + "' является палиндромом"
// 	} else {
// 		return "строка '" + str + "' не является палиндромом"
// 	}
// }

// console.log(palindrome("а топот"));

// 4. Напишите функцию, которая принимает строку и возвращает 
// символ, который встречается в ней чаще всего. Если таких 
// символов несколько, функция должна возвращать строку из 
// этих символов.

// function countSymbol(str) {
// 	let newStr = "";

// 	for (let i = 0; i < str.length; i++) {
// 		if(str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
// 			newStr += str[i];
// 		}
// 	}

// 	return newStr;

// }

// console.log(countSymbol("напишите функцию"));

// 5. Напишите функцию, которая получает в аргументы три 
// строки – str, search, replace. Функция ищет ВСЕ вхождения 
// search в str, заменяет каждую подстроку search на подстроку 
// replace и возвращает результат.

// function searchReplace(str, search, replace) {
// 	let newStr = str.split("");

// 	for (let i = 0; i < newStr.length; i++) {
// 		if(newStr[i] == search) {
// 			newStr[i] = replace;
// 		}
// 	}

// 	return newStr.join("");
// }

// console.log(searchReplace("заменяет каждую подстроку на", "а","А"));

// 6. Напишите функцию, которая замяняет первую букву каждого 
// слова в строке на такую же большую.

// function capitalLetter(str) {
// 	str = "заменяет каждую подстроку на";
// 	let newStr = str.split(" ");

// 	for (let i = 0; i < newStr.length; i++) {
// 		newStr[i] = newStr[i].slice(0, 1).toUpperCase() + newStr[i].slice(1);
// 	}

// 	return newStr.join(" ");
// }

// console.log(capitalLetter());

// 7. Напишите функцию, которая заменяет все повторяющиеся 
// символы в строке на звёздочки. Например, строка "я учусь 
// программированию" должна преобразоваться в "я уч*сь 
// прог*ам*и**в*н*ю".

// function replaceOnStar () {
// 	let str = "я учусь программированию";
// 	let symb = "*";
// 	let newStr = "";

// 	for (let i = 0; i < str.length; i++) {
// 		if(newStr.includes(str[i])) {
// 			newStr = newStr + symb;
// 		} else {
// 			newStr = newStr + str[i];
// 		}
// 	}

// 	return newStr;
// }

// console.log(replaceOnStar());

// 8. Напишите функцию, которая возвращает текущий день недели 
// на русском языке.

// function dayOfWeek () {
// 	let day = new Date();
// 	switch (day.getDay()) {
// 		case 0:
// 		    console.log("воскресенье");
// 		    break;
// 		case 1:
// 		    console.log("понедельник");
// 		    break;  
// 		case 2:
// 		    console.log("вторник");
// 		    break;
// 		case 3:
// 		    console.log("среда");
// 		    break;
// 		case 4:
// 		    console.log("четверг");
// 		    break;
// 		case 5:
// 		    console.log("пятница");
// 		    break;
// 		case 6:
// 		    console.log("суббота");
// 		    break;                      
// 		default:
// 		    console.log("error");
// 	}
// }

// dayOfWeek();

// 9. Напишите функцию, которая принимает у пользователя 
// дату в формате "ДД-ММ-ГГГГ" и, используя функцию из 
// задачи 8, выдаёт в консоль день недели для этой даты.

// function dayOfWeek () {
// 	let date = prompt("Введите дату", "ДД-ММ-ГГГГ");
// 	let arrDate = date.split("-").reverse().join('-');
// 	let day = new Date(arrDate + "T00:00:00");
// 	switch (day.getDay()) {
// 		case 0:
// 		    console.log("воскресенье");
// 		    break;
// 		case 1:
// 		    console.log("понедельник");
// 		    break;  
// 		case 2:
// 		    console.log("вторник");
// 		    break;
// 		case 3:
// 		    console.log("среда");
// 		    break;
// 		case 4:
// 		    console.log("четверг");
// 		    break;
// 		case 5:
// 		    console.log("пятница");
// 		    break;
// 		case 6:
// 		    console.log("суббота");
// 		    break;                      
// 		default:
// 		    console.log("error");
// 	}
// }

// console.log(dayOfWeek());


// 10. Примите у пользователя день его рождения в формате 
// "ДД-ММ-ГГГГ". Напишите функцию, которая выводит в 
// консоль количество дней, оставшихся до его дня рождения. 
// Напишите функцию, которая возвращает дату, в которую 
// пользователь отметит ближайший 1000-дневный юбилей 
// (например, 11000 дней).

function numberOfDay (day) {
	//let day = prompt("Введите свой день рождения", "ДД-ММ-ГГГГ");
	let dayOfBday = day.split("-").reverse();
	let nowYear = new Date();
	let newBday = nowYear.getFullYear() + "-" + dayOfBday[1] + "-" + dayOfBday[2] + "T00:00:00";
	let numberOfDay = Math.ceil((Date.parse(newBday) - Date.now()) / 24 / 60 / 60 / 1000);



	console.log(numberOfDay);

}

console.log(numberOfDay("16-06-1986"));
// 11. Напишите функцию, которая принимает число, проверяет, 
// является ли оно квадратом целого числа. Если это так, 
// функция возвращает квадратный корень исходного числа; 
// в ином случае генерирует ошибку. Используя задачу 2 из 
// практики, создайте массив целых чисел. Вызовите 
// написанную функцию для каждого элемента, отлавливая 
// ошибки и выводя в консоль сообщения и о них, и об успешных 
// результатах. Массив должен быть пройден до конца, несмотря 
// на ошибки!
