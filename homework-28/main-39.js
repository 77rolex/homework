// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
    name: 'Oleg',
    age: 33,
    height: 180,
}
// const person = {}

// console.log(person)

// =====================================================================================
// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty(object) {
    for (let key in object) {
        return false
    }
    return true
}
// console.log(isEmpty(person))

// =====================================================================================
// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), 
// которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

// const task = {
//     title: 'Harry Potter',
//     description: 'Book about charmer',
//     isCompleted: true,
// }
// const task2 = {
//     price: 30,
//     stock: 500,
// }

// function cloneAndModify(object, modifications) {
//     let getClone = { ...object, ...modifications }
//     return getClone
// }

// for (key in cloneAndModify(task, task2)) {
//     console.log(`${key}:`, cloneAndModify(task, task2)[key])
// }

// =====================================================================================
// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.
const callAllMethods = object => {

    let methods = {}
    let noMethods = {}

    for (let key in object) {
        if (typeof object[key] === 'function') {
            methods[key] = object[key]
        } else {
            noMethods[key] = object[key]
        }
    }
    for (let key in methods) {
        methods[key]()
    }
    
    if (isEmpty(methods) === true) {
        for (let key in noMethods) {
            noMethods[key]
            console.log(noMethods[key])
        }
    }
}

const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};
callAllMethods(myObject);

