
addEventListener('DOMContentLoaded', function() {

	if (localStorage.getItem('bookDB')) {
		db = JSON.parse(localStorage.getItem('bookDB'));
		} else {
			localStorage.setItem('bookDB', JSON.stringify(db));
		}


// вывод контента на страницу

    mainPage = document.querySelector('main');

    // First page

    
    let main_page_autor = document.createElement('div');
    main_page_autor.id = 'main_page_autor';
    mainPage.appendChild(main_page_autor);
    
    let main_page_stihi = document.createElement('div');
    main_page_stihi.id = 'main_page_stihi';
    mainPage.appendChild(main_page_stihi);

    let detailsBtnArr = [];

	function getInfoWriters() {
		for (let i = 0; i < db.length; i++){
			let info_writer = document.createElement('div');
			info_writer.classList.add('info_writer');
			info_writer.id = 'info_writer';
			main_page_autor.appendChild(info_writer);


			let info_writer_name = document.createElement('h3');
	        info_writer_name_text = document.createTextNode(db[i].name + " " + db[i].lastname)
	        info_writer_name.appendChild(info_writer_name_text);
	        info_writer_name.classList.add('info_writer_name');
	        info_writer.appendChild(info_writer_name);

	        let info_writer_photo = document.createElement('img');
	        info_writer_photo.setAttribute('src', db[i].photo);
	        info_writer_photo.classList.add('info_writer_photo');
	        info_writer.appendChild(info_writer_photo);

	        let info_writer_period = document.createElement('span');
	        info_writer_period_text = document.createTextNode(db[i].period);
	        info_writer_period.appendChild(info_writer_period_text);
	        info_writer_period.classList.add('info_writer_period');
	        info_writer.appendChild(info_writer_period);

	        let detailsBtn = document.createElement('input');
            detailsBtn.type = "button";
            detailsBtn.value = "Подробнее";
	        detailsBtn.classList.add('detailsBtn');
	        detailsBtnArr.push(db[i].lastname);
	        info_writer.appendChild(detailsBtn);

            // Как сделать чтобы убиралось getInfoWriters() getInfoStihi() getInfoPeriod()???

            detailsBtn.addEventListener('click', function(){
                getMoreInfoWriter(i);
            });

	    }
	}


    //console.log(detailsBtnArr);


    let works_theme = ["О любви", "О жизни", "О войне", "О природе", "О Родине", "Для детей"];

    function getInfoStihi(){
    	let theme = document.createElement('div');
    	let theme_text = document.createTextNode("Темы:");
    	theme.appendChild(theme_text);
    	theme.classList.add('theme');

    	for(let i = 0; i < works_theme.length; i++) {
    		let theme_info = document.createElement('span');
    		let theme_info_text = document.createTextNode(works_theme[i]);
    		theme_info.appendChild(theme_info_text);
    		theme_info.classList.add('theme_info');
    		theme.appendChild(theme_info);
    	}
    	main_page_stihi.appendChild(theme);
    }

    let writer_period = ["Классическая проза", "Советская проза", "Современная проза"]

    function getInfoPeriod(){
    	let period = document.createElement('div');
    	let period_text = document.createTextNode("Период:");
    	period.appendChild(period_text);
    	period.classList.add('period');

    	for(let i = 0; i < writer_period.length; i++) {
    		let period_info = document.createElement('span');
    		let period_info_text = document.createTextNode(writer_period[i]);
    		period_info.appendChild(period_info_text);
    		period_info.classList.add('period_info');
    		period.appendChild(period_info);
    	}
		main_page_stihi.appendChild(period);
    }

    getInfoWriters();
    getInfoStihi();
    getInfoPeriod();
        

        // Second page


    let main_page_autor_about = document.createElement('div');
    main_page_autor_about.id = 'main_page_autor_about';
    mainPage.appendChild(main_page_autor_about);

    function getMoreInfoWriter(item) {
        let works = db[item].works;
    	
        let info_writer_about = document.createElement('div');
    	info_writer_about.id = 'info_writer_about';
    	main_page_autor_about.appendChild(info_writer_about);


    	let info_writer_name = document.createElement('h3');
        info_writer_name_text = document.createTextNode(db[item].name + " " + db[item].lastname)
        info_writer_name.appendChild(info_writer_name_text);
        info_writer_name.classList.add('info_writer_name');
        info_writer_about.appendChild(info_writer_name);

        let info_writer_photo = document.createElement('img');
        info_writer_photo.setAttribute('src', db[item].photo);
        info_writer_photo.classList.add('info_writer_photo');
        info_writer_about.appendChild(info_writer_photo);

        let info_writer_birthday = document.createElement('span');
        info_writer_birthday_text = document.createTextNode(
    	    	"Дата рождения: " + db[item].birthday);
        info_writer_birthday.appendChild(info_writer_birthday_text);
        info_writer_birthday.classList.add('info_writer_birthday');
        info_writer_about.appendChild(info_writer_birthday);

        let info_writer_deathday = document.createElement('span');
        if (db[item].deathday != ""){
    		info_writer_deathday_text = document.createTextNode("Дата смерти : " + db[item].deathday);
    		info_writer_deathday.appendChild(info_writer_deathday_text);
    	    info_writer_deathday.classList.add('info_writer_deathday');
    	    info_writer_about.appendChild(info_writer_deathday);
    	};

        let info_writer_place = document.createElement('span');
        info_writer_place_text = document.createTextNode("Место рождения: " + db[item].birthplace);
        info_writer_place.appendChild(info_writer_place_text);
        info_writer_place.classList.add('info_writer_direction');
        info_writer_about.appendChild(info_writer_place);
        
        let info_writer_direction = document.createElement('span');
        info_writer_direction_text = document.createTextNode("Направление: " + db[item].direction);
        info_writer_direction.appendChild(info_writer_direction_text);
        info_writer_direction.classList.add('info_writer_direction');
        info_writer_about.appendChild(info_writer_direction);

        let info_writer_period = document.createElement('span');
        info_writer_period_text = document.createTextNode("Период: " + db[item].period);
        info_writer_period.appendChild(info_writer_period_text);
        info_writer_period.classList.add('info_writer_period');
        info_writer_about.appendChild(info_writer_period);


        let info_writer_genre = document.createElement('span');
        info_writer_genre_text = document.createTextNode("Жанр: " + db[item].genre);
        info_writer_genre.appendChild(info_writer_genre_text);
        info_writer_genre.classList.add('info_writer_genre');
        info_writer_about.appendChild(info_writer_genre);

        let info_writer_description = document.createElement('p');
        info_writer_description_text = document.createTextNode(db[item].about);
        info_writer_description.appendChild(info_writer_description_text);
        info_writer_description.classList.add('info_writer_description');
        info_writer_about.appendChild(info_writer_description);

        

    	for(let j = 0; j < works.length; j++) {
    		let info_writer_works = document.createElement('a');
    		info_writer_works_text = document.createTextNode(works[j].title);
    		info_writer_works.appendChild(info_writer_works_text);
    		info_writer_works.href="#"; // вставить ссылку
    		info_writer_works.classList.add('info_writer_works');
    		info_writer_about.appendChild(info_writer_works);
    	}	
    }

    // getMoreInfoWriter(3);


        // Third page

    let main_page_stihi_about = document.createElement('div');
    main_page_stihi_about.id = 'main_page_stihi_about';
    mainPage.appendChild(main_page_stihi_about);

    function getMoreInfoStihi(item, count) {
        let works = db[item].works; 

        let info_stihi_about = document.createElement('div');
        info_stihi_about.id = 'info_stihi_about';
        main_page_stihi_about.appendChild(info_stihi_about);


        let info_stihi_name = document.createElement('h3');
        info_stihi_name_text = document.createTextNode(works[count].title)
        info_stihi_name.appendChild(info_stihi_name_text);
        info_stihi_name.classList.add('info_stihi_name');
        info_stihi_about.appendChild(info_stihi_name);

        let infoStihiImage = document.createElement('img');
        infoStihiImage.setAttribute('src', works[count].image);
        infoStihiImage.classList.add('infoStihiImage');
        info_stihi_about.appendChild(infoStihiImage);

        let info_stihi_theme = document.createElement('span');
        info_stihi_theme_text = document.createTextNode("Тема: " +
                works[count].theme);
        info_stihi_theme.appendChild(info_stihi_theme_text);
        info_stihi_theme.classList.add('info_stihi_theme');
        info_stihi_about.appendChild(info_stihi_theme);

        let info_stihi_content = document.createElement('pre');
        info_stihi_content_text = document.createTextNode(works[count].content);
        info_stihi_content.appendChild(info_stihi_content_text);
        info_stihi_content.classList.add('info_stihi_content');
        info_stihi_about.appendChild(info_stihi_content);

        let info_stihi_publication = document.createElement('span');
        if (works[count].publication != ""){
            info_stihi_publication_text = document.createTextNode(works[count].publication);
            info_stihi_publication.appendChild(info_stihi_publication_text);
            info_stihi_publication.classList.add('info_stihi_publication');
            info_stihi_about.appendChild(info_stihi_publication);
        };
    }
    //getMoreInfoStihi(3, 1);




        // Footer


    function getFooter() {
    	let footer = document.querySelector('footer');
    	let about_site_one = document.createElement('span');
    	let about_site_one_text = document.createTextNode("© 2020 Все права защищены.");
    	about_site_one.appendChild(about_site_one_text);
    	let about_site_two = document.createElement('span');
    	let about_site_two_text = document.createTextNode("При использовании материалов сайта ссылка на сайт обязательна!");
    	about_site_two.appendChild(about_site_two_text);
    	footer.appendChild(about_site_one);	
    	footer.appendChild(about_site_two);
    }

    getFooter();

    // Search

    searchInputWrapper = document.querySelector("#search");
    searchInput = document.createElement('input');
    searchInput.type = "search";
    searchInput.classList.add('searchInput');
    searchInputWrapper.appendChild(searchInput);

    searchInput.addEventListener('input', function(e) {
        onSearchInputChange(e);
    });

});

function onSearchInputChange(e) {
    findAuthors(searchInput.value);
}

function findAuthors(searchValue) {
    if (searchValue == '') {
        renderSearchResults([]);
        return;
    }

    let searchRegEx = new RegExp('^.*' + searchValue +  '.*$', 'gi');

    let foundAuthorIds = [];

    for (let i = 0; i < db.length; i++) {
        let entry = db[i];

        let found = false;

        if (entry.name.search(searchRegEx) !== -1
         || entry.lastname.search(searchRegEx) !== -1
         // || entry.genre.search(searchRegEx) !== -1
         // || entry.period.search(searchRegEx) !== -1
         ) {
            found = true;
        }

        for (let j = 0; j < entry.works.length; j++) {

        }

        // console.log('Author `' + entry.name + '`: ' + (found ? '1' : '0'));

        if (found) {
            foundAuthorIds.push(entry.id);
        }
    }

    renderSearchResults(foundAuthorIds);
}

let mainPage = null;
let searchInputWrapper = null;
let searchInput = null;
let searchResultsWrapper = null;


function renderSearchResults(foundAuthorIds) {
    removeSearchResults();

    if (foundAuthorIds.length == 0) {
        return;
    }

    searchResultsWrapper = document.createElement('div');
    searchResultsWrapper.classList.add('searchResultsWrapper');

    searchResultsWrapper.style.left = searchInput.offsetLeft + 'px';
    searchResultsWrapper.style.top = (searchInput.offsetTop + searchInput.offsetHeight) + 'px';

    for (let i = 0; i < foundAuthorIds[i]; i++) {
        let authorId = foundAuthorIds[i];
        let author = getDbItemById(authorId);

        // console.log(author);

        let resultItem = document.createElement('div');
        resultItem.classList.add('resultItem');

        resultItem.innerHTML = author.name + ' ' + author.lastname + ' [' + author.works.length + ']';
        searchResultsWrapper.appendChild(resultItem);
    }

    mainPage.appendChild(searchResultsWrapper);
}

function removeSearchResults() {
    if (searchResultsWrapper != null) {
        mainPage.removeChild(searchResultsWrapper);
        searchResultsWrapper = null;
    }
}

function getDbItemById(id) {
    for (let i = 0; i < db.length; i++) {
        if (db[i].id === id) {
            return db[i];
        }
    }
    return null;
}