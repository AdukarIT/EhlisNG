// 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите 
// в консоль элемент с ключом 'c' двумя способами: через 
// квадратные скобки и через точку. Затем выведите все 
// свойства объекта через цикл for..in.

// let obj = {a: 1, b: 2, c: 3};

// console.log(obj.c);
// console.log(obj["c"]);

// for (let prop in obj) {
// 	console.log(prop + ": " + obj[prop]);
// }

// 2. Создайте объект city, добавьте ему свойства name 
// (название города, строка) и population (население, число).

// let city = {};

// city.name = "Minsk";
// city["population"] = 1992685;

// console.log(city);

// 3. Создайте массив из шести объектов такого же вида, 
// как city из задачи 2 – по одному для каждого областного 
// города Беларуси.

let cities = [
    {name: "Minsk", population: 1992685},
    {name: "Gomel", population: 536938},
    {name: "Mogilev", population: 383313},
    {name: "Vitebsk", population: 378459},
    {name: "Grodno", population: 373547},
    {name: "Brest", population: 350616}];

console.log(cities);

// 4.Напишите функцию, которая принимает массив из задачи 3 
// в качестве параметра и выводит в консоль информацию о 
// каждом городе.

// function showInfoCity(arr) {
// 	for (let i = 0; i < arr.length; i++)
// 	console.log(arr[i]);
// }

// console.log(showInfoCity(cities));

// 5. Создайте в объектах с городами из задачи 3 метод getInfo, 
// который возвращает строку с информацией о городе (например, 
// таком формате: "Город Добруш, население – 18760 человек").

// function getInfo(arr) {
// 	for (let i = 0; i < arr.length; i++) 
// 		console.log("Город " + arr[i].name + ", население - " + arr[i].population + " человек");
// }

// console.log(getInfo(cities));

// 6. Создайте объект с информацией о себе (имя, фамилия, любимое 
// занятие). Добавьте в него метод, который выводит эту 
// информацию в консоль в удобочитаемом формате.

let person = {
	name: "Natallia",
	lastname: "Ehlis",
	hobby: "Bachata"
};

function getInfo() {
	console.log("Моё имя " + this.name);
	console.log("Моя фамилия " + this.lastname);
	console.log("Моё хобби " + this.hobby);
}


person.introduse = getInfo;

person.introduse();