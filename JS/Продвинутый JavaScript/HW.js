// 1. Напишите функцию, которая принимает в качестве параметра номер символа в таблице Unicode. Подсчитайте количество таких символов во всех элементах массива, как в задаче 3 из первой части практики.

// function symbol (number) {
//     let symb = String.fromCharCode(number);
//     return symb;
// }

// let symb = symbol(1080);

// let arr = ["количество", "таких", "символов", "во", "всех", "элементах", "массива"];

// function countSymbol (arr) {
//     let count = 0;
//     arr.forEach(function(item, index, arr) {
//         let newArr = item.split("");
//         for(let i = 0; i < newArr.length; i++) {
//             if(newArr[i] == symb) {
//                 count++
//             }
//         }
//     })
//         return count;
// };

// console.log(countSymbol(arr));

// 2. Напишите функцию, которая будет возвращать частичную функцию от функции из задачи 1, фиксируя искомый символ. Например:

// let countOfD = letterCounter(100);  // 100 = 'd' в Unicode

// console.log(countOfD(["dad", "rod", "doctor"])); // 4

// function letterCounter(x) {
//     let count = 0;
//     let symb = String.fromCharCode(x);
//     function findSymb(arr) {
//         arr.forEach(function(item, index, arr) {
//             let newArr = item.split("");
//             for(let i = 0; i < newArr.length; i++) {
//                 if(newArr[i] == symb) {
//                     count++
//                 }
//             }
//         })
//         return count;
//     }    
//     return findSymb;
// };

// let countOf = letterCounter(1080);

// console.log(countOf(["количество", "таких", "символов", "во", "всех", "элементах", "массива"]))

// Для решения задач 3-6 используйте файл uscities.js.

// 3. Отфильтруйте массив городов так, чтобы в нём остались только города из штата Калифорния, которые с 2000 по 2013 выросли в населении.

// let californiaArr = [];

// californiaArr = data.filter(function(item, index, arr){
//     return (item.state == "California" && parseFloat(item.growth_from_2000_to_2013) > 0);
// });

// console.log(californiaArr);    

// 4. Подсчитайте, сколько миллионов населения живёт во всех городах на широте от 25 до 30 градусов.


// let countOfPopulation = data.reduce(function(count, item) {
//     if (item.latitude >= 25 && item.latitude <= 30) {
//         count = count + parseFloat(item.population);
//     }
//     return count;
// }, 0);

// console.log(countOfPopulation);

// 5. Создайте массив только из тех городов, которые начинаются на букву D, при этом отсортируйте элементы этого массива по названию города.


// function citiesArr() {
//     let citiesD = [];
//     citiesD = data.filter(function(item, index, arr) {
//         return item.city.split("")[0] == "D";
//     })

//     let sortedCitiesD = citiesD.sort(function(a, b){
//         return a.city > b.city;
//     })
//     return sortedCitiesD;
// }

// console.log(citiesArr());

// 6. Преобразуйте представленный массив "Города" в объект "Штаты":

// для каждого штата – отдельное свойство объекта (ключ = название штата);
// значение каждого свойства – массив городов;
// каждый элемент массива – название города, население и место в общем рейтинге (rank).

function statesObj(){
    let states = {};
    data.forEach(function(item){
        states[item["state"]] = [];
    })    

    for (let key in states){
        for (let i = 0; i < data.length; i++) {
            if (key == data[i].state) {
                states[data[i].state].push({
                    city: data[i].city,
                    population: data[i].population,
                    rank: data[i].rank
                });
            }
        }
    }
    return states;
}

console.log(statesObj());
