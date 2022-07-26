// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let Group = [
    'Red Hot Chili Peppers', 'Rammstein', 'Cannibal Corpse', 'The Cranberries', 'Power Woolf', 'Skillet', 'Linkin Park',
    'Thirty Seconds To Mars', 'The Offspring', 'System Of A Down'
]
console.log(Group[0]);
console.log(Group[1]);
console.log(Group[2]);
console.log(Group[3]);
console.log(Group[4]);
console.log(Group[5]);
console.log(Group[6]);
console.log(Group[7]);
console.log(Group[8]);
console.log(Group[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let Books1 = {
    title: '1984',
    pageCount: '312',
    genre: 'Наукова фантастика'
}
let Books2 = {
    title: 'Скандинавська міфологія',
    pageCount: '256',
    genre: 'Міф'
}
let Books3 = {
    title: 'Гаррі Поттер і філософський камінь',
    pageCount: '320',
    genre: 'Пригоди'
}
console.log(Books1, Books2, Books3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// Кожен автор має поля name,age

Books1 = {
    title: '1984',
    pageCount: '312',
    genre: 'Наукова фантастика',
    authors: [
        {
            name: 'Джордж Орвелл',
            age: '46'
        }
    ]
}
Books2 = {
    title: 'Скандинавська міфологія',
    pageCount: '256',
    genre: 'Міф',
    authors: [
        {
            name: 'Ніл Ґейман',
            age: '61'
        }
    ]
}
Books3 = {
    title: 'Гаррі Поттер і філософський камінь',
    pageCount: '320',
    genre: 'Пригоди',
    authors: [
        {
            name: 'Джоан Роулінг',
            age: '56'
        }
    ]
}
console.log(Books1, Books2, Books3);

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