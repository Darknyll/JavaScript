// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let words = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'
]

for (let i = 0; i < words.length; i++) {
    document.write(`<div>${words[i]}</div>`);

}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < words.length; i++) {
    document.write(`<div>${words[i]} ${i}</div>`);
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let documents = [
    'п‘ять', 'торф’яний', 'здоров’я', 'м’ясо', 'зв’язок', 'сім’я', 'бур’ян', 'кур’єр', 'п’єдестал',
    'під’їхати', 'з’єднати', 'з’їхати', 'роз’яснити', 'об’єднати', 'трьох’ярусний', 'пів’яблука', 'любов’ю',
    'об’єднання', 'п’єса', 'пів’яблука'
]

let i = 0;
while (i < documents.length) {
    document.write(`<h1>${documents[i]}</h1>`);
    i++
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
i = 0;
while (i < documents.length) {
    document.write(`<h1>${documents[i]} ${i} </h1>`);
    i++
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`);
for (const listOfItem of listOfItems) {
        document.write(`<li>${listOfItem}`);
    }
    document.write(`</ul>`);


//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let product of products) {
    document.write(`
    <div>
       <h2>${product.title} ${product.price}₴</h2>
       <img src="${product.image}" alt="">
    </div>`);
}


//     є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
//     - користувачів зі статусом true

for (let i = 0; i < users.length; i++) {
    if (users[i].status){
        document.write(`<div>${users[i].name} ${users[i].age} ${users[i].status}</div>`);
    }

}

// - користувачів зі статусом false

for (let i = 0; i < users.length; i++) {
    if (!users[i].status){
        document.write(`<div>${users[i].name} ${users[i].age} ${users[i].status}</div>`);
    }

}

// - користувачів які старші за 30 років
for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 30){
        document.write(`<div>${users[i].name} ${users[i].age} ${users[i].status}</div>`);
    }

}