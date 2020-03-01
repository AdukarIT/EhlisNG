// 1. Все элементы label внутри таблицы. Должно быть 3 элемента.

console.log(document.getElementsByTagName('table')[0].getElementsByTagName('label'));

// 2. Первую ячейку таблицы (со словом "Возраст").

console.log(document.getElementsByTagName('table')[0].rows[0].cells[0]);

// 3. Вторую форму в документе.

console.log(document.getElementsByTagName('form')[1]);

// 4. Форму с именем search, без использования её позиции в документе.

console.log(document.getElementsByName('search')[0]);

// 5. Элемент input в форме с именем search. Если их несколько, то нужен первый.

console.log(document.getElementsByTagName('form')[0].getElementsByTagName('input')[0]);

// 6. Элемент с именем info[0], без точного знания его позиции в документе.

console.log(document.getElementsByName('info[0]'));

// 7. Элемент с именем info[0], внутри формы с именем search-person.

console.log(document.querySelector("form[name='search-person']").querySelector("[name='info[0]']"));

// 8. ???

let arr = ['http://google.com', '/tutorial.html', 'local/path', 'ftp://ftp.com/my.zip', 'http://nodejs.org', 'http://internal.com/test'];
	let newUl = document.createElement("ul");
	document.body.appendChild(newUl);

for (let i = 0; i < arr.length; i++) {
	let newLi = document.createElement("li");
	let newA = document.createElement("a");
	document.querySelector("ul").appendChild(newLi).appendChild(newA);
	text = document.createTextNode(arr[i]);
	document.querySelector("a").appendChild(text);
	document.querySelector("a").style.href="text";
};