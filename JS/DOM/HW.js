// 1. Дан элемент #elem. Добавьте ему класс "www".

// let elem = document.getElementById("elem");
// elem.classList.add("www");
// console.log(elem);

// // 2. Дан элемент #elem. Проверьте наличие у него класса "www", если есть - удалите класс

// if(elem.classList.contains("www")) {
// 	elem.classList.remove("www");
// 	console.log("был, удалён")
// } else {
// 	console.log("не было")
// }

// 3. Напишите функцию поиска recursiveSearchTags, которая принимает на вход document и имя тега, а возвращает массив из всех элементов соответствующих этому тегу. Поиск идет в теге body

// function recursiveSearchTags(document, tagName) {
// 	let arrTag = [];
	
// 	for(let node of document.body.getElementsByTagName(tagName)) {
// 		arrTag.push(node);
// 	}
// 	return arrTag;
// } 

// console.log(recursiveSearchTags(document, "div"));

//???// 4. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. Сделайте так, чтобы четные позиции имели красный фон.

// let ulList = document.getElementsByTagName("ul");
// let arr = ["one", "two", "three", "four", "five", "six"];
// console.log(ulList)

// for (let i = 0; i < arr.length; i++) {
// let newLi = document.createElement("li");
// newLi.append("arr[i]");
// ulList.appendChild(newLi); // ?????
// if(i % 2 == 0 || i == 0) {
// 	newLi.style.backgroundColor = "red";
// }
// }

// 5. Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'

// let previous = elem.previousElementSibling;
// let text = document.createTextNode("!");
// previous.append(text);


// 6. Реализуйте функцию wrapInParagraph, которая находит текст (дочерние текстовые ноды) внутри элемента div и оборачивает текст в параграф

function wrapInParagraph(){
	let arrDiv = document.querySelectorAll('div');
	for (let i = 0; i < arrDiv.length; i++) {
		let div = arrDiv[i];
		for(let j = 0; j < div.childNodes.length; j++) {
			console.log(div.childNodes[i]);
			if(div.childNodes[j].nodeType === 3) {
				let newText = div.replaceChild(document.createElement("p"), div.childNodes[j]);
				div.childNodes[j].appendChild(newText);
			}
		}
	}	
}

wrapInParagraph();

// 7. Реализуйте функцию normalizeClassNames, которая нормализует имена классов для всех элементов на странице. В данном случае это означает что происходит преобразование всех классов написанных используя kebab нотацию в camelCase нотацию: text-center => textCenter

