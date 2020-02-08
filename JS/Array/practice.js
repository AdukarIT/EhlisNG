// 1. Создайте массив и в цикле заполните его чётными 
// числами от 2 до 20.

// let arr = [];

// for (let i = 2; i <= 20; i++) {
// 	if (i % 2 == 0)
// 	arr.push(i);
// }

// console.log(arr);

// let arr = [];

// for (let i = 0; i < 10; i++) {
// 	arr[i] = (i + 1) * 2;
// }

// console.log(arr);

// 2. Преобразуйте массив из задачи 1 так, чтобы его 
// элементы стали равны своему индексу, умноженному на 5.

// let arr = [];

// for (let i = 0; i < 10; i++) {
// 	arr[i] = i * 5;
// }

// console.log(arr);


// 3. Получите от пользователя три числа, создайте из них 
// массив. Используя циклы, найдите наибольшее из чисел 
// и разделите на него каждый элемент массива.

// let arrNumber = [];

// for (let i = 0; i < 3; i++) {
// 	let number = +prompt("Введите число " + (i + 1));
// 	arrNumber[i] = number;
// }

// let max = 0;
// for (let i = 0; i < 3; i++) {
// 	if (max < arrNumber[i])
// 		max = arrNumber[i];
// }

// console.log(arrNumber);
// console.log(max);

// let a = +prompt("Введите число 1");
// let b = +prompt("Введите число 2");
// let c = +prompt("Введите число 3");
// let arrNumber = [a, b, c];
// let max = arrNumber[0];

// for (let i = 1; i < arrNumber.length; i++) {
// 	if (max < arrNumber[i]){
// 		max = arrNumber[i];
// 	}		
// }

// for ( i = 0; i < arrNumber.length; i++) {
// 	arrNumber[i] = arrNumber[i] / max;
// }

// console.log(arrNumber);

// 4. Преобразуйте массив из задачи 2 так, чтобы его 
// элементы расположились в обратном порядке.

// let arr = [];
// let arr2 = [];

// for (let i = 0; i < 10; i++) {
// 	arr[i] = i * 5;
// }

// console.log(arr);


// for (let j = 0; j < arr.length; j++) {
// 	arr2[j] = arr[arr.length - 1 - j];
// 	arr[arr.length - 1 - j] = arr2; 
// }

// console.log(arr2);

// 5. Создайте массив из чисел от 1 до 35. Вырежьте из него 
// первые 10 элементов, а затем добавьте их в конец массива. 
// Разверните в обратном порядке элементы с 11 по 20. Удалите 
// элементы с 21 по 25, на их место вставьте пять первых 
// степеней двойки. Элементы с 26 по 30 замените на единицы. 
// Элементы с 31 по 35 склейте в одну строку, разделяя 
// пробелами, и замените на итоговую строку.

// let arr = [];

// for (let i = 0; i < 35; i++) {
// 	arr[i] = i + 1;
// }

// for (let j = 1; j <= 10; j++) {
// 	arr.shift(j);
// 	arr.push(j);
// }

// arr = arr.splice(0, 10).reverse().concat(arr);

// for (i = 10; i < 15; i++) {
// 	arr[i] = 2 ** (i % 10 +1);
// }

// arr.fill(1, 26, 31);

// arr.splice(31, 5, arr.slice(31, 35).join(" "));	

// console.log(arr);

// 6. Напишите функцию, которая удаляет из массива 
// повторяющиеся элементы и возвращает обновлённый массив.

// function deleteRepeat(arr) {
// 	arr.sort();
// 	let newArr = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] != arr[i + 1]) {
// 			newArr.push(arr[i]);
// 		}
// 	}
// 	return newArr;
// }	

// console.log(deleteRepeat([2, 5, 3, 9, 1, 2, 5, 6, 2, 1, 0, 2]));

// 7. Напишите функцию, удаляющую из массива все элементы, 
// которые при приведении к типу Boolean дают false.

function deleteElement(arr) {
	let newArr = [];
	for (i = 0; i < arr.length; i++) {
		if(Boolean(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

console.log(deleteElement([1, NaN, 0, 99, "abc", "", undefined, 7, null, true, false, 10]));