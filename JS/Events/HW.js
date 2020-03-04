window.addEventListener('DOMContentLoaded', function() {
// 	1. Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
   
    let div = document.getElementsByTagName('div');
    let btn = document.querySelector('#btn');
    let text = document.querySelector('#text');
    btn.addEventListener('click', function(){
    	let clone = text.cloneNode(true);
    	console.log(clone);
    	div.appendChild(clone); // ???
    })


// 2. Добавьте на страницу таблицу в стандартном оформлении. При клике на таблице добавьте ей класс bordered, при втором клике удалите класс bordered и добавьте класс striped, при третьем клике удалите класс striped и добавьте класс highlight.

    let table = document.querySelector('table');
    console.log(table);

    table.addEventListener('click', function(elem){
    	if (table.classList.contains('bordered')) {
    		table.className = ('striped');
    	} else if (table.classList.contains('striped')) {
    		table.className = ('highlight');
    	} else {
    		table.className = ('bordered');
    	}
    })


// 3. Модифицируйте задачу 2. Добавьте три radiobutton. При выборе первого включается класс bordered, при выборе второго отключается bordered и включается striped, при выборе третьего включается highlight и отключается striped.

    let borderedBtn = document.querySelector('#bordered');
    let stripedBtn = document.querySelector('#striped');
    let highlightBtn = document.querySelector('#highlight');

    borderedBtn.addEventListener('click', function() {
    	table.className = (this.value);
    })

    stripedBtn.addEventListener('click', function() {
    	table.className = (this.value);
    })

    highlightBtn.addEventListener('click', function() {
    	table.className = (this.value);
    })

// 4. Создайте кнопку. При нажатии на кнопку с помощью элемента this выведите содержащийся в тегах кнопки текст. Вывод осуществлять с помощью alert. Создайте кнопку отключающую события на предыдущей кнопке.
    let btn2 = document.querySelector('#btn2');
    let btn3 = document.querySelector('#btn3');

    function alertBtn() {
    	alert(this.value);
    }

    function offBtn() {
    	alertBtn.removeEventListener('click', alertBtn);
    }

    btn2.addEventListener('click', alertBtn);


    btn3.addEventListener('click', offBtn);


// 5. Создайте элементы div, p, button, a. Используя target по клику выводите информацию о типе элемента по которому произошел клик.
    let elemCol = document.querySelectorAll('.elem');
    console.log(elemCol);

    // for (let node of elemCol) {
    // 	node.addEventListener('click', function() {
    // 		console.log(node);
    // 	})
    // }

    for (let i = 0; i < elemCol.length; i++) {
    	elemCol[i].addEventListener('click', function(e) {
    		console.log(e.target.tagName);
    	})
    }

// 6. Добавьте в html код изображение. Добавьте скрипт, который будет выполнять следующие действия: при наведении мыши на картинку, изображение будет заменяться другим изображением. При выходе мыши за пределы изображения, будет восстанавливаться первоначальное изображение.

    let img = document.querySelector('img');

    img.addEventListener('mouseover', function(){
    	this.setAttribute('src', 'cat2.png');
    });

    img.addEventListener('mouseout', function(){
    	this.setAttribute('src', 'cat1.png');
    });
    


// 7. Используя событие onclick реализовать аналог fancybox. При клике – картинка увеличивается в размерах и всплывает над контентом. Остальной контент затемняется. Для «всплывания» изображения используйте position:absolute.
    
    let imgBird = document.querySelectorAll('.bird');
    let bigImg = document.querySelector('#bigImg');

    for (let node of imgBird) {
    	node.addEventListener('click', function(){
    		let cloneImg = node.getAttribute('src');
    		bigImg.style.display = "inline-block";
    		bigImg.setAttribute('src', cloneImg);
    	})
    }

})