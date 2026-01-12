// Задача 1.
// Создайте переменные с корректными именами, чтобы сохранить следующую информацию:
// 1. firstName – имя (строка)
// 2. lastName – фамилия (строка)
// 3. isStudent – является ли учеником курса (булево значение)

// Задача 2.
// 1. Объявите переменную age с числовым значением возраста студента.
// 2. Объявите переменную currentYear и присвойте ей значение текущего года (например, 2025).
// 3. Используя age и currentYear вычислите год рождения студента, запишите результат в переменную birthYear.

// Задача 3.
// Выведите в консоли сообщение в таком формате:
// Меня зовут [firstName] [lastName], мне [age] лет. Я ученик/ученица курса: [isStudent].

// Задача 4.
// Какое значение будет у переменной result?
// let a = '123';
// let b = +'456';
// let c = Number('789');
// let d = Boolean(0);
// let e = Boolean(' ');
// let result = a + b + c + d + e;


// 1)
const FIRST_NAME = "John"
const LAST_NAME = "Doe"
let isStudent = true

// 2)
let age = 30
let currentYear = 2026
const BIRTH_YEAR = currentYear - age
console.log(
    `Задача 2: 
    ${BIRTH_YEAR} г.р.`
)

// 3)
console.log(
    `Задача 3: 
    Меня зовут ${FIRST_NAME} ${LAST_NAME}, мне ${age} лет.
    Я ученик курса: ${isStudent}.`
)

// 4)
let a = '123';
let b = +'456';
let c = Number('789');
let d = Boolean(0);
let e = Boolean(' ');
let result = a + b + c + d + e;
console.log(
    `Задача 4:
    ${result}`

)
