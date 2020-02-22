// 1. Напишите функцию counterFactory(start, step), 
// которая при вызове возвращает другую функцию – счётчик 
// tictoc(). start – стартовое значение счётчика, 
// step – его шаг. При каждом вызове tictoc увеличивает 
// значение счётчика на step.

// function counterFactory(start, step) {
// 	function tictoc() {
// 		return start += step;
// 	}

// 	return tictoc;
// }

// let result = counterFactory(3, 5);

// console.log(result());
// console.log(result());
// console.log(result());

// 2. Напишите функцию take(tictoc, x), которая вызывает 
// функцию tictoc заданное число (x) раз и возвращает 
// массив с результатами вызовов.

// let tictoc = function(start = 3, step = 5) {
// 	return function() {
// 		return start += step;
// 	}	
// }

// function take(tictoc, x) {
// 	let arr = [];
// 	for (i = 0; i < x; i++) {
// 		arr.push(tictoc())
// 	}
// 	return arr;
// }

// console.log(take(tictoc(), 3));


// 3. Разбейте текст этой задачи на отдельные слова, удаляя 
// по пути точки и запятые, а полученные слова сложите в 
// массив. Напишите функцию, которая возвращает массив из 
// тех же слов, но развёрнутых задом наперёд, причём массив 
// должен быть отсортирован по количеству букв в слове. 
// Напишите другую функцию, которая считает общее количество 
// букв с во всех элементах массива.

// let str = "Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв с во всех элементах массива.";

// let arr = str.split(".").join("").split(",").join("").split(" ");

// function sorter() {
// 	arr = arr.reverse();
// 	arr.sort(function (a, b) {
// 		return a.length - b.length;
// 	});
// 	return arr;
// }

// function countC(arr) {
// 	let count = 0;
// 	arr.forEach(function(item, index, arr) {
// 		let newArr = item.split("");
// 		for (let i = 0; i < newArr.length; i++) {
// 			if(newArr[i] == "с")
// 				count++
// 		}
// 	})

// 	return count;
// }

// console.log(arr);
// console.log(sorter(arr));
// console.log(countC(arr));


// 4. Дан код:
// let obj = { greeting: "Привет" };
// function func(surname, name) {
// alert(this.greeting + ', ' + surname + ' ' + name);
// }
// func();  // тут должно вывести 'привет, Иванов Иван'
// Добавьте в последнюю строчку метод call() так, чтобы 
// на экран вывелось 'Привет, Иванов Иван'. Слово 'привет' 
// возьмите из свойства объекта obj, а 'Иванов' и 'Иван' 
// задайте как параметры функциями.

// let obj = { greeting: "Привет" };
// function func(surname, name) {
// alert(this.greeting + ', ' + surname + ' ' + name);
// }
// func.call(obj, "Иванов", "Иван");

// 5. Перепишите задачу так, чтобы вместо call применялся 
// apply.

let obj = { greeting: "Привет" };
function func(surname, name) {
alert(this.greeting + ', ' + surname + ' ' + name);
}
func.apply(obj, ["Иванов", "Иван"]);