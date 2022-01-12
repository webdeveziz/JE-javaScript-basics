// Задание #2

// Questions
const question1 = 'Сколько будет 2 + 2?'
const question2 = 'Сколько будет 2 * 2?'
const question3 =
  'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'
const question4 =
  'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'
const question5 = 'Сколько будет 2 + 2 * 2?'

// Correct Answers
const answer1 = 4
const answer2 = 4
const answer3 = 1
const answer4 = 12
const answer5 = 6

let correctAnswers = 0
let incorrectAnswers = 0

// Answwers of users
const userAnswer1 = Number(prompt(question1).trim())

if (answer1 === userAnswer1) {
  alert('Ответ Верный!')
  correctAnswers++
} else {
  alert('Ответ Неверный!')
  incorrectAnswers++
}

const userAnswer2 = Number(prompt(question2).trim())
if (answer2 === userAnswer2) {
  alert('Ответ Верный!')
  correctAnswers++
} else {
  alert('Ответ Неверный!')
  incorrectAnswers++
}

const userAnswer3 = Number(prompt(question3).trim())
if (answer3 === userAnswer3) {
  alert('Ответ Верный!')
  correctAnswers++
} else {
  alert('Ответ Неверный!')
  incorrectAnswers++
}

const userAnswer4 = Number(prompt(question4).trim())
if (answer4 === userAnswer4) {
  alert('Ответ Верный!')
  correctAnswers++
} else {
  alert('Ответ Неверный!')
  incorrectAnswers++
}

const userAnswer5 = Number(prompt(question5).trim())
if (answer5 === userAnswer5) {
  alert('Ответ Верный!')
  correctAnswers++
} else {
  alert('Ответ Неверный!')
  incorrectAnswers++
}

alert('Конец теста!')
alert(
  `Правильные ответы - ${correctAnswers} \nНеправильные ответы - ${incorrectAnswers}`
)
