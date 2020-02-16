// 1. Напишите функцию, которая получает в качестве 
// аргументов объект и строку и проверяет, есть ли в этом 
// объекте свойство с именем, равным этой строке.

// let human = {
// 	name: "Vasja",
// 	lastname: "Ivanov",
// 	age: 30
// }

// function check(obj, string) {
// 	console.log(string in this);
// }

// check(human, "name");

// 2. Создайте объект для хранения своего любимого 
// кулинарного рецепта. Он должен содержать название, 
// ингредиенты и их необходимое количество (в виде 
// вложенного объекта), а также количество порций 
// (больше 1). Напишите функцию, которая получает "рецепт", 
// подсчитывает, сколько каждого ингредиента нужно на одну 
// порцию, и выводит информацию об этом в консоль.

// let recipe = {
// 	title: "Apple cake",
// 	ingredients: {
// 		apples: 6,
// 		eggs: 3,
// 		sugar: 210,
// 		flour: 210
// 	},
// 	numberOfServings: 3,
// }

// recipe.onePortion = function() {
// 		for (let prop in this.ingredients) {
// 			return prop + " for one portion " + this.ingredients[prop] / this.numberOfServings;
// 		}
// 	}

// console.log(recipe);
// console.log(recipe.onePortion());

// 3. Создайте объект "Цилиндр" (свойства – радиус и высота). 
// Добавьте в него метод, который считает объём цилиндра 
// (используя this).

// let cylinder = {
// 	radius: 6,
// 	height: 12
// }

// cylinder.volume = function() {
// 	return Math.round(Math.PI * this.radius ** 2 * this.height);
// }

// console.log(cylinder.volume());

// 4. Выберите пингвина из списка вымышленных пингвинов на 
// Википедии и опишите его в виде объекта (не менее трёх 
// полей; например, имя, создатель и источник). 
// Добавьте этому объекту свойство canFly. Добавьте два 
// метода: sayHello, который выводит в консоль приветствие 
// и представление вашего пингвина, и fly, который в 
// зависимости от значения свойства canFly (true или false) 
// определяет, может ли пингвин летать, и сообщает об этом 
// в консоль.

let penguin = {
	name: "Tux",
	creator: "Lary Yung",
	source: "Linux"
}

penguin.canFly = true;

penguin.sayHello = function() {
	console.log("Hi, my name is " + this.name + ", " + this.creator + " created me. I am logo " + this.source + ".");
}

penguin["fly"] = function() {
	if (this.canFly == false) {
		console.log("I can't fly.");
	} else {
		console.log("I can fly.");
	}
}

console.log(penguin);
console.log(penguin.sayHello());
console.log(penguin.fly());