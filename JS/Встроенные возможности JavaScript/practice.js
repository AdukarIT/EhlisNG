// 1. Напишите функцию, которая создаёт и возвращает 
// массив длиной 20 элементов, каждый из которых – 
// случайное число от 1 до 50.

// function newArr() {
// 	let arr = [];
// 	for (let i = 0; i < 20; i++) {
// 		arr[i] = Math.floor(Math.random() * 50 + 1);
// 	}
// 	return arr;
// }

// console.log(newArr());

// 2. Перепишите функцию из задачи 1, так, чтобы она 
// принимала три аргумента: длину нужного массива, 
// минимальное и максимальное значения элементов.

// function newArr(len, min, max) {
// 	let arr = [];
// 	for (let i = 0; i < len; i++) {
// 		arr[i] = Math.floor(Math.random() * (max - min + 1)+ min);
// 	}
// 	return arr;
// }

// console.log(newArr(10, 2, 3));

// 3. Напишите функцию, которая проверяет, начинается 
// ли строка на https:// и заканчивается ли она на .html. 
// Если оба условия выполнены, функция возвращает true, 
// в ином случае – false.

// function check(str) {
// 	return (str.slice(0, 8) == "https://" && str.slice(str.length - 5) == ".html");
// }

// console.log(check("https://validator.w3.org/check.html"));

// 4. Напишите функцию, которая считает, сколько раз 
// определённый символ встречается в строке.

// function countSymbol(sym, str) {
// 	let i = 0;
// 	let count = 0;
// 	while (i != -1) {
// 		i++;
// 		i = str.indexOf(sym, i);
// 		count++;
// 	} ;

// 	return count;
// }

// function countSymbol(sym, str) {
// 	let count = 0;

// 	for (let i = 0; i < str.length; i++) {
// 		if(str.charAt(i) == sym) {
// 			count++;
// 		}	
// 	}

// 	return count;
// }

// console.log(countSymbol("н", "заканчивается ли она на б"));

// 5. Перепишите функцию из задачи 4 так, чтобы она считала 
// большие и маленькие буквы одним и тем же символом 
// (например, 'A' == 'a').

// function countSymbol(sym, str) {
// 	let count = 0;

// 	for (let i = 0; i < str.length; i++) {
// 		if(str.charAt(i) == sym || str.charAt(i).toLowerCase() == sym) {
// 			count++;
// 		}	
// 	}

// 	return count;
// }

// console.log(countSymbol("н", "заканчивается ли оНа на б"));

// 6. Напишите функцию, которая выводит в консоль текущие 
// дату, месяц и год в формате «24 января 2019».

// function dateNow () {
// 	let nowDate = new Date;
// 	let monthArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
//         'июля', 'августа', 'сентября', 'октября' , 'ноября', 'декабря']
//     let month = monthArr[nowDate.getMonth()];        
	
// 	console.log(nowDate.getDate() + " " + month + " " + nowDate.getFullYear());	
// }

// dateNow();

// 7. Напишите функцию, которая выводит в консоль количество 
// секунд, прошедших с начала текущего дня.

// function numberOfSeconds () {
// 	let newYearDate = Date.parse("01 Jan 2020 00:00:00 GMT");
// 	let today = Date.now();

// 	return Math.round((today - newYearDate) / 1000);
// }

// console.log(numberOfSeconds());


function numberOfSeconds() {
	let nowTime = new Date ();

	return Math.round((Date.now() - Date.parse(nowTime.toDateString() + " 00:00:00 GMT")) / 1000);
}

console.log(numberOfSeconds());

// 8. Напишите функцию, которая принимает от пользователя 
// строку. Если эта строка не содержит буквы «ф», 
// сгенерируйте собственную ошибку. Вызовите функцию так, 
// чтобы при возникновении «поймать» ошибку в try/catch.

function getStr(str) {
	//let str = prompt("Введите строку");
	try {
			if(str.indexOf('ф')==-1) 
				throw new Error("Строка не содержит буквы 'ф'")
	} catch (e) {
		alert(e.name + " : " + e.message);
	} finally {
		alert("Продолжаем вводить о_О");
	}
}

getStr("которая принимает от пользователя строку")
getStr("Напишите функцию, которая принимает от пользователя строку")