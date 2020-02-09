// 1. Используя встроенную функцию Math.random(), 
// напишите собственную функцию getRandomArray(len), 
// которая возвращает массив случайных чисел длиной len.

let arr = [];

function getRandomArray(len) {
	for (let i = 0; i < len; i++) {
		arr[i] = Math.floor(Math.random() * 20);
	}
	return arr;
}

console.log(getRandomArray(10));
// console.log(arr);

// 2. Выведите в консоль элементы массива, которые больше 
// среднего арифметического всех элементов.

// let newArr = [];
// let sum = 0;

// for (i = 0; i < arr.length; i++) {
// 	sum = sum + arr[i];
// }

// for (i = 0; i < arr.length; i++){
// 	if (arr[i] > sum / arr.length) {
// 		newArr.push(arr[i]);
// 	}
// }	

// console.log(sum);
// console.log(newArr);

// 3. Найдите два наименьших элемента массива.

// let newArr = [];
// let minFirst = arr[0];
// let minSecond = arr[0];

// for (i = 0; i < arr.length; i++) {
// 	if(arr[i] < minFirst) {
// 		minFirst = arr[i];
// 	} 
// }	
// for (i = 1; i < arr.length; i++) {
// 	if(minFirst < arr[i] && arr[i] < minSecond) {
// 		minSecond = arr[i];
// 	}

// }
// 	newArr.push(minFirst,minSecond);

// console.log(newArr);

// 4. Удалите из массива все элементы, меньшие 0.3.
// Сдвиньте все оставшиеся элементы вперёд, а на 
// освободившиеся места вставьте нули.

// for (i = 0; i < arr.length; i++) {
// 	if (arr[i] < 10) {
// 		arr.splice(i, 1);
// 		arr.unshift(0);
// 	}
// }

// console.log(arr);

// 5. Попарно сложите элементы двух массивов равной 
// длины: первый массива 1 с последним массива 2, 
// второй массива 1 с предпоследним массива 2 и так далее. 
// Верните массив с результатами сложения.

// let arr2 = [];

// function getRandomArray2(len) {
// 	for (i = 0; i < len; i++) {
// 		arr2[i] = Math.floor(Math.random() * 20);
// 	}

// 	return arr2;
// }

// console.log(getRandomArray2(10));
// // console.log(arr2);

// let sum = 0;
// let newArr = [];
// let arr3 = arr2.reverse();

// for (i = 0; i < arr.length; i++) {
// 	sum = arr[i] + arr3[i];
// 	newArr.push(sum);
// }

// console.log(newArr);

// 6. Отсортируйте массив методом пузырька. О самом алгоритме 
// можно почитать на википедии. А ещё можно посмотреть, 
// как его танцуют в Венгрии.

let newArr = [];

for (i = arr.length; i > 0; i--){
	for (let j = 0; j < i; j++) {
		if(arr[j] >= arr[j + 1]) {
			newArr[j] = arr[j + 1];
			arr[j + 1] = arr[j];
			arr[j] = newArr[j];			
		} else {
			newArr[j] = arr[j];
		}
	}
}	


console.log(newArr);

// 7. (*) Проверьте, есть ли в массиве два числа, сумма 
// которых очень близка к 1 (0.999 < sum < 1.001). Если 
// такая пара (или такие пары) есть, выведите их в консоль.


// 8. (*) Создайте массив той же длины, что исходный. 
// На месте самого большого числа исходного массива в новом 
// вставьте число 1, на месте второго по величине – 2
// и так далее.


// 9. (*) Сделайте сдвиг массива вправо на X позиций 
// (X передайте в функцию в качестве аргумента). Элементы, 
// которые после сдвига "уходят" за пределы его длины, 
// переместите на освободившиеся первые Х позиций.

