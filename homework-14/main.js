// ==================== 1 homework ===================================================
let userFirstName, userLastName, userBirthday, userAge, userGender;

userFirstName = 'Oleg';
userLastName = 'Kolesnykov';
userBirthday = '1993-02-07';
userAge = 32;
userGender = 'male';

console.log(userFirstName, userLastName, userBirthday, userAge, userGender);


// ==================== 2 homework ===================================================
const numbers = [1, 2, 3, 4, 5, 6, 7]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] + 1)
}

// ==================== 3 homework ===================================================
const users = ['Alex', 'Oleg', 'Vika', 'Andrei', 'Olga']
function checkForCopyItem(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return `There is a copy of the ${item} in array`
        }
    }
    return 'There is not such item in the array'
}

console.log(checkForCopyItem(users, 'Denis'))



// 1)
const helloFunction = (userName) => {
    return `Hello ${userName}`
}

console.log(helloFunction('Oleg'))

// 2)
const someNumbers = [1, 2, 31, 4, 5, 6, 73, 8, 9, 10]

const ifMoreThen = (arrayOfNumbers) => {
    let count = 0
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] > 10) {
            console.log(`Number ${arrayOfNumbers[i]} is more then 10`)
            count++
        }
    }
    if (count === 0) {
        console.log('There is no number more then 10')
    }
}

ifMoreThen(someNumbers)

// 3)
const calculator = (num1, num2, operator) => {
    let result1
    let result2
    let result3
    let result4
    if (operator === 'plus') {
        return result1 = num1 + num2
    } else if (operator === 'minus') {
        return result2 = num1 - num2
    } else if (operator === 'multiply') {
        return result3 = num1 * num2
    } else if (operator === 'divide') {
        if (num2 === 0) {
            return 'Not devisible by zero'
        }
        return result4 = num1 / num2
    }
    return 'Wrong operator'
}

console.log(calculator(2, 3, 'plus'))
console.log(calculator(2, 3, 'minus'))
console.log(calculator(2, 3, 'multiply'))
console.log(calculator(2, 3, 'divide'))


// ==================== 4 homework ===================================================
const itsMe = {
    name: 'oleg',
    age: 32,
    sayHello(name) {
        console.log(`Hello ${name}`)
    }
}
console.log(itsMe)
itsMe.sayHello('Mike')

// =====================
const allUsers = [
    {
        name: 'sergei',
        age: 30,
        isAdmin: false
    },
    {
        name: 'vasiliy',
        age: 25,
        isAdmin: false
    },
    {
        name: 'irina',
        age: 29,
        isAdmin: false
    },
    {
        name: 'olga',
        age: 22,
        isAdmin: false
    },
    {
        name: 'andrei',
        age: 23,
        isAdmin: false
    },
    {
        name: 'vika',
        age: 29,
        isAdmin: true
    }
]

let userQuantity = 0

const findNotAdmin = (users) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].isAdmin === false) {
            userQuantity++
        }
    }
    return userQuantity
}
console.log(`Колличество простых пользователей: ${findNotAdmin(allUsers)}`)





