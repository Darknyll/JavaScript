// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами, а і б

// function sCalc(a, b) {
//     let res = a * b;
//     return res;
// }
//
// console.log(sCalc(11, 12));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function sRCalc(r) {
//     let res = (3.14159 * r) * (3.14159 * r);
//     return res;
// }
//
// console.log(sRCalc(15));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r

// function sHCalc(r, h) {
//     let res = (2 * 3.14159 * r) * (r + h);
//     return res;
// }
//
// console.log(sHCalc(12, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент

let words = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'
]

let documents = [
    'п‘ять', 'торф’яний', 'здоров’я', 'м’ясо', 'зв’язок', 'сім’я', 'бур’ян', 'кур’єр', 'п’єдестал',
    'під’їхати', 'з’єднати', 'з’їхати', 'роз’яснити', 'об’єднати', 'трьох’ярусний', 'пів’яблука', 'любов’ю',
    'об’єднання', 'п’єса', 'пів’яблука'
]

// function array(arr) {
//     for (let i = 0; i < arr.length; i++) {
//     }
//     return arr;
// }
//
// console.log(array(words));

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function texts(text) {
//     let word = `<p>${text}</p>`;
//     return word;
// }
//
// document.write(texts('Darknyll'));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function lists(list) {
//     let roster = `<ul>
// <li>${list}</li>
// <li>${list}</li>
// <li>${list}</li>
// </ul>`;
//     return roster;
// }
//
// document.write(lists('Darknyll'))

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function lists(list, n) {
//     for (let = n; ) {
//         let roster = `<ul>
// <li>${list}</li>
// </ul>`;
//     }
//     return roster;
// }
//
// document.write(lists(Darknyll, 5))
// ??????????????????????????????????????????????????????????????????????
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function elements(arr) {
    document.write('<ul>');
    for (let array of arr) {
            document.write(`<li>${array}`);
        }
        document.write(`</ul>`);
}

elements(words);
elements(documents)
// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let user = [
    {
        id: '123415',
        name: 'Elizabeth',
        age: '34'
    },
    {
        id: '543267',
        name: 'Riley',
        age: '12'
    },
    {
        id: '155411',
        name: 'Vanessa',
        age: '24'
    },
    {
        id: '994477',
        name: 'Robert',
        age: '15'
    }
]

function obj(object) {
    for (let objecte of object) {
        document.write(`
    <div>
       ${objecte.id} ${objecte.name} ${objecte.age}
    </div>`);
    }
}

document.write(obj(user));

// - створити функцію яка повертає найменьше число з масиву

let n = [1124,-2,-93,4,6,-52,151,62,-124,115,1512]

function number(array) {
    let min = array[0]
    for (let numb of array) {
        if (min > numb) {
            min = numb
        }
    }
    return min;
}

console.log(number(n));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function add(arr) {
    let numb = 0;
    for (let arrElement of arr) {
        numb += arrElement;
    }
return numb
}

console.log(add(n));