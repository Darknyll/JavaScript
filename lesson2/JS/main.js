// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let group = [
    'Red Hot Chili Peppers', 'Rammstein', 'Cannibal Corpse', 'The Cranberries', 'Power Woolf', 'Skillet', 'Linkin Park',
    'Thirty Seconds To Mars', 'The Offspring', 'System Of A Down'
]
console.log(group[0]);
console.log(group[1]);
console.log(group[2]);
console.log(group[3]);
console.log(group[4]);
console.log(group[5]);
console.log(group[6]);
console.log(group[7]);
console.log(group[8]);
console.log(group[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let books1 = {
    title: '1984',
    pageCount: '312',
    genre: 'Наукова фантастика'
}
let books2 = {
    title: 'Скандинавська міфологія',
    pageCount: '256',
    genre: 'Міф'
}
let books3 = {
    title: 'Гаррі Поттер і філософський камінь',
    pageCount: '320',
    genre: 'Пригоди'
}
console.log(books1, books2, books3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// Кожен автор має поля name,age

books1.authors =
    [
        {
            name: 'Джордж Орвелл',
            age: '46'
        }
    ]

books2.authors =
     [
        {
            name: 'Ніл Ґейман',
            age: '61'
        }
    ]

books3.authors =
     [
        {
            name: 'Джоан Роулінг',
            age: '56'
        }
    ]

console.log(books1, books2, books3);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let user = [
    {
        name: 'Elizabeth',
        username: 'yellowish',
        password: 'AwfGgars'
    },
    {
        name: 'Riley',
        username: 'jobless',
        password: 'GEwgwghjes'
    },
    {
        name: 'Vanessa',
        username: 'thick',
        password: 'Awfgakyipp'
    },
    {
        name: 'Robert',
        username: 'mortgage',
        password: 'HJfglyLpy0'
    },
    {
        name: 'Sophie',
        username: 'understand',
        password: 'Y846log9'
    },
    {
        name: 'Lucca',
        username: 'artist',
        password: 'O8630jjfiiy'
    },
    {
        name: 'Kai',
        username: 'cupcake',
        password: '4D7v8fD4Kz'
    },
    {
        name: 'Ember',
        username: 'ambiguous',
        password: 'J6i5Fj7T5e'
    },
    {
        name: 'Jesse',
        username: 'suddenly',
        password: 'Hp69Y2xdA2'
    },
    {
        name: 'Billy',
        username: 'try',
        password: 'k73N2a7fFZ'
    }
]
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);