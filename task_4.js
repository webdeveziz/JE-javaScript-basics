// Задание #4

// for (let i = 0; i < 3; i += 1) {
//   let newStudent = prompt('Введите имя нового студента!')
//   newStudent = newStudent.trim()
//   if (newStudent) {
//     alert(`Добро пожаловать, ${newStudent}!`)
//   }
// }

// let i = 0
// while (i < 3) {
//   let newStudent = prompt('Введите имя нового студента!').trim()
//   if (newStudent) alert(`Добро пожаловать, ${newStudent}!`)
//   i++
// }

let i = 0
do {
  let newStudent = prompt('Введите имя нового студента!').trim()
  if (newStudent) alert(`Добро пожаловать, ${newStudent}!`)
  i++
} while (i < 3)
