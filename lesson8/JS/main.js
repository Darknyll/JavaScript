// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [
//     new User(932745, 'Anna', 'Popoc', 'Annapp@gmail.com', 380735572689),
//     new User(125257, 'Vitaliy', 'Korn', 'VitKorn@gmail.com', 380967488119),
//     new User(468325, 'Viktor', 'Muzika', 'VikMuz@gmail.com', 380558636003),
//     new User(894325, 'Olga', 'Dancer', 'Olads@gmail.com', 380978472358),
//     new User(457422, 'Irina', 'Smoke', 'Irasm@gmail.com', 380673292546),
//     new User(987665, 'Maria', 'Shyfer', 'MaSha@gmail.com', 380552390688),
//     new User(236743, 'Roman', 'Drifter', 'RomaDrift@gmail.com', 380956358236),
//     new User(823475, 'Jerry', 'Hail', 'JerryHa@gmail.com', 380558966985),
//     new User(443682, 'Andriy', 'Bosiy', 'Andruha@gmail.com', 380634778758),
//     new User(478923, 'Ivan', 'Fantast', 'VaniaFant@gmail.com', 380963686452)
// ]
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// console.log(users.filter(value => !(value.id % 2)));
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// console.log(users.sort((a, b) => a.id - b.id));

// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//     constructor(id, name, surname, email, phone,[...order]) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = [...order];
//     }
// }
//
// let clients = [
//     new Client(932745, 'Anna', 'Popoc', 'Annapp@gmail.com', 380735572689,
//         ['Cola','Bread','Pissa']),
//     new Client(125257, 'Vitaliy', 'Korn', 'VitKorn@gmail.com', 380967488119,
//         ['Water','Snickers','Bread']),
//     new Client(468325, 'Viktor', 'Muzika', 'VikMuz@gmail.com', 380558636003,
//         ['Water','Snickers','Pringels']),
//     new Client(894325, 'Olga', 'Dancer', 'Olads@gmail.com', 380978472358,
//         ['Cola','Pissa','Pringels']),
//     new Client(457422, 'Irina', 'Smoke', 'Irasm@gmail.com', 380673292546,
//         ['Cola','Pringels']),
//     new Client(987665, 'Maria', 'Shyfer', 'MaSha@gmail.com', 380552390688,
//         ['Water','chicle']),
//     new Client(236743, 'Roman', 'Drifter', 'RomaDrift@gmail.com', 380956358236,
//         ['Cola','Snickers',]),
//     new Client(823475, 'Jerry', 'Hail', 'JerryHa@gmail.com', 380558966985,
//         ['Cola','Pissa','Pringels']),
//     new Client(443682, 'Andriy', 'Bosiy', 'Andruha@gmail.com', 380634778758,
//         ['Water']),
//     new Client(478923, 'Ivan', 'Fantast', 'VaniaFant@gmail.com', 380963686452,
//         ['Cola','Snickers','Pissa','Pringels'])
// ]
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// console.log(clients.sort((a, b) => a.order.length - b.order.length));

// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// // максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, producer, graduationYear, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.graduationYear = graduationYear;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     }
//     this.info = function () {
//         console.log(`Модель - ${model}`);
//         console.log(`Виробник - ${producer}`);
//         console.log(`Рік випуску - ${graduationYear}`);
//         console.log(`Максимальна швидкість - ${maxSpeed}`);
//         console.log(`об'єм двигуна - ${engineCapacity}`);
//
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         if (newSpeed > maxSpeed){
//             maxSpeed = newSpeed
//         }
//     }
//     this.changeYear = function (newValue) {
//         graduationYear = newValue
//     }
//     this.addDriver = function (driver) {
//         console.log(this.driver = driver);
//     }
// }
//
// const audiTT = new Car('TT', 'Audi', 2012, 320,2.2);
// audiTT.changeYear(2020)
// audiTT.increaseMaxSpeed(400)
// audiTT.drive();
// audiTT.info();
// audiTT.addDriver({name: 'Anton', age: 21});

// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// // максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, producer, graduationYear, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.graduationYear = graduationYear;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     info() {
//         console.log(`Модель - ${this.model}`);
//         console.log(`Виробник - ${this.producer}`);
//         console.log(`Рік випуску - ${this.graduationYear}`);
//         console.log(`Максимальна швидкість - ${this.maxSpeed}`);
//         console.log(`об'єм двигуна - ${this.engineCapacity}`);
//
//     }
//     increaseMaxSpeed(newSpeed) {
//         if (newSpeed > this.maxSpeed){
//             this.maxSpeed = newSpeed
//         }
//     }
//     changeYear(newValue) {
//         this.graduationYear = newValue
//     }
//     addDriver(driver) {
//         console.log(this.driver = driver);
//     }
// }
//
// const audiTT = new Car('TT', 'Audi', 2012, 320,2.2);
// audiTT.changeYear(2020)
// audiTT.increaseMaxSpeed(400)
// audiTT.drive();
// audiTT.info();
// audiTT.addDriver({name: 'Anton', age: 21});

// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize
//     }
// }
//
// let cinderelles = [
//     new Cinderella('Vika', 21, 43),
//     new Cinderella('Maria', 18, 41),
//     new Cinderella('Jessica', 32, 40),
//     new Cinderella('Rosa', 52, 39),
//     new Cinderella('Ksyusha', 26, 43),
//     new Cinderella('Anna', 16, 36),
//     new Cinderella('Vlada', 34, 45),
//     new Cinderella('Alina', 17, 40),
//     new Cinderella('Alucard', 29, 44),
//     new Cinderella('Zoro', 21, 46)
// ];
// let princ = {
//     name: 'Robert',
//     age: 17,
//     theShoeHeFound: 36
// }
// for (let i = 0; i < cinderelles.length; i++) {
//     let cinderelle = cinderelles[i];
//     if (cinderelle.footSize === princ.theShoeHeFound){
//         console.log(`${cinderelle.name} і ${princ.name} є парою`)
//     }
// }
// let love = cinderelles.find(person => person.footSize === princ.theShoeHeFound);
// console.log(love.name,'i', princ.name, 'є парою');