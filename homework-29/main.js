// Задание 1.
// Дан массив пользователей:
const users = [
    { name: 'Alex', age: 24, isAdmin: false },
    { name: 'Bob', age: 13, isAdmin: false },
    { name: 'John', age: 31, isAdmin: true },
    { name: 'Jane', age: 20, isAdmin: false },
]

// Добавьте в конец массива двух пользователей:
users.push(
    { name: 'Ann', age: 19, isAdmin: false },
    { name: 'Jack', age: 43, isAdmin: true }
)


// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.
// function getUserAverageAge(users) {
//     let sum = 0
//     users.forEach(user => {
//         sum += user.age
//     });
//     return console.log(sum / users.length)
// }
// getUserAverageAge(users)
// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.
// function getAllAdmins(users) {
//     const admins = []
//     users.forEach(user => {
//         if (user.isAdmin === true) {
//             admins.push(user)
//         }
//     });
//     return console.log(admins)
// }
// getAllAdmins(users)

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. 
// Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.
function first(arr, n) {
    const getElements = []
    if (n > arr.length) {
        return console.log(`Max n is ${arr.length}`)
    }
    if (n == undefined) {
        for (let i = 0; i < 1; i++) {
            getElements.push(arr[i])
        }
    }
    for (let i = 0; i < n; i++) {
        getElements.push(arr[i])
    }
    return console.log(getElements)
}
first(users, 5)
