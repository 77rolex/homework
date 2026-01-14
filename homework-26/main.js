// Задача 1.
// Напишите цикл, который выводит числа от 1 до 20, но пропускает те числа, которые делятся на 4 без остатка.

// for (let i = 1; i <= 20; i++) {
//     if (i % 4 === 0) {
//         continue
//     }
//     console.log(i)
// }


// Задача 2.
// С помощью цикла for вычислите факториал числа (произведение всех чисел от 1 до заданного числа). Используйте prompt для получение начального значения.

// let number = +prompt()
// let factorial = 1
// for (let i = 1; i <= number; i++) {
//     factorial = factorial * i
//     console.log(factorial)
// }


// *Задача 3.
// Выведите в консоль шахматную доску размером 8x8, где символы чередуются (например, # и пробел). Начинайте с # в первой ячейке первой строки.
let board = ''

for (let g=0; g<4;g++){
    for (let i = 0; i < 1; i++) {
        let row = ''
        for (let j = 0; j < 4; j++) {
            row += "# "
        }
        row+='\n'
        board+=row
    }
    for (let i = 0; i < 1; i++) {
        let row = ''
        for (let j = 0; j < 4; j++) {
            row += " #"
        }
        row+='\n'
        board+=row
    }
}
console.log(board)