// - Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str ='hello world';
// console.log(str.length);
// str = 'lorem ipsum';
// console.log(str.length);
// str = 'javascript is cool';
// console.log(str.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str ='hello world';
// console.log(str.toUpperCase());
// str = 'lorem ipsum';
// console.log(str.toUpperCase());
// str = 'javascript is cool';
// console.log(str.toUpperCase());

// - Перевести до нижнього регістру наступні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = 'HELLO WORLD';
// console.log(str.toLowerCase());
// str = 'LOREM IPSUM';
// console.log(str.toLowerCase());
// str = 'JAVASCRIPT IS COOL';
// console.log(str.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.substring(1, 13));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// console.log(str.split(' '));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let array = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(array.map(value => `${value}`));

// - створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки
// в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// let ascending = nums.sort((a, b) => a - b);
// let descending = nums.sort((a, b) => b - a);
// console.log(ascending);
// console.log(descending);

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// let sort = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
// console.log(sort);
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filter = coursesAndDurationArray.filter(value => value.monthDuration >5);
// console.log(filter);

// описати колоду карт

let cards = [
    '6-spade','7-spade','8-spade','9-spade','10-spade','jack-spade','queen-spade','king-spade','ace-spade',
    '6-diamond','7-diamond','8-diamond','9-diamond','10-diamond','jack-diamond','queen-diamond','king-diamond','ace-diamond',
    '6-heart','7-heart','8-heart','9-heart','10-heart','jack-heart','queen-heart','king-heart','ace-heart',
    '6-club','7-club','8-club','9-club','10-club','jack-club','queen-club','king-club','ace-club'
]

// - знайти піковий туз
// cards.filter(function (card) {
//     if (card === 'ace-spade'){
//         console.log(card)
//     }
// })
// - всі шістки
let cardOfSix = cards.filter(card => card.startsWith('6'));
console.log(cardOfSix)
// - всі червоні карти
let allRedCards = cards.filter(card => card.endsWith('diamond')||card.endsWith('heart'));
console.log(allRedCards)
// - всі буби
let allDiamondCards = cards.filter(card => card.endsWith('diamond'));
console.log(allDiamondCards)
// - всі хрести від 9 та більше
let clubsAboveNine = cards.filter(card => card.endsWith('club')&&!card.startsWith('6')&&!card.startsWith('7')&&!card.startsWith('8'));
console.log(clubsAboveNine)

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт

let packagedCards = cards.reduce(function (accumulator, card) {
    if (card.endsWith('spade')){
        accumulator.spades.push(card)
    }else if (card.endsWith('diamond')){
        accumulator.diamonds.push(card)
    }else if (card.endsWith('heart')){
        accumulator.hearts.push(card)
    }else if (card.endsWith('club')){
        accumulator.clubs.push(card)
    }
    return accumulator;
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});
console.log(packagedCards);

