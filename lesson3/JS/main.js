// - Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x;

x = 1;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
x = 0;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
x = -3;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt("Введіть час");

if (time >= 0 && time <= 14) {
    console.log('В першу частину години');
//???????????????????????????????????????????????????????????????????????????????????????????????
// Як зробити так щоб коли ти нічого не вводиш вибивала помилка, а не те що пише у цьому рядку кода 31 рядок
} else if (time >= 15 && time <= 29) {
    console.log('В другу частину години');
} else if (time >= 30 && time <= 44) {
    console.log('В третю частину години');
} else if (time >= 45 && time <= 59) {
    console.log('В четверту частину години');
} else {
    console.log('Помилка перевірте правильність числа')
}

let time1 = +prompt("Введіть час");

switch (true) {
    case time1 >= 0 && time1 <= 14:
        console.log('В першу частину години');
        break;
    case time1 >= 15 && time1 <= 29:
        console.log('В першу частину години');
        break;
    case time1 >= 30 && time1 <= 44:
        console.log('В першу частину години');
        break;
    case time1 >= 45 && time1 <= 59:
        console.log('В першу частину години');
        break;
    default:
        console.log('Помилка перевірте правильність числа');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt("Введіть день");

if (day >= 1 && day <= 10) {
    console.log('В першу декаду');
} else if (day >= 11 && day <= 20) {
    console.log('В другу декаду');
} else if (day >= 21 && day <= 31) {
    console.log('В третю декаду');
} else {
    console.log('Помилка перевірте правильність числа');
}

// - Скласти розклад на тиждень за допомоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let week = prompt('Введіть номер дня тижня')

switch (week) {
    case '1':
        console.log('monday')
        break;
    case '2':
        console.log('tuesday')
        break;
    case '3':
        console.log('wednesday')
        break;
    case '4':
        console.log('thursday')
        break;
    case '5':
        console.log('friday')
        break;
    case '6':
        console.log('saturday')
        break;
    case '7':
        console.log('sunday')
        break;
    default:
        console.log('Помилка перевірте правильність числа');
        break
}

// //- Користувач вводить або має два числа.Потрібно знайти та вивести максимальне число з тих двох.
// // Також потрібно врахувати коли введені рівні числа.

let n1 = +prompt('number')
let n2 = +prompt('number')

if (n1 > n2) {
    console.log(n1);
} else if (n1 < n2) {
    console.log(n2);
} else {
    console.log('Значення рівні');
}

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//за допомоги оператора || буде присвоювати змінній х значення "default" якщо значення змінної х являється falsy
// (хибноподыбне, тобто кастується до false)
//
let un = prompt('userName') || 'Darknyll';
console.log(un)

let nu = prompt('userName');
if (!nu) {
    console.log('Darknyll')
} else {
    console.log(nu)
}