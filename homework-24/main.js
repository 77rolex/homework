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