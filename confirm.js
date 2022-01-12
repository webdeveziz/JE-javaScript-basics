// Confirm - task 3

const question1 = 'JavaScript появился в 1995 году?'
const question2 = 'Спецификация JavaScript называется ECMAScript?'
const question3 = 'JavaScript был создан за 1 месяц?'

const userAnswer1 = confirm(question1)
userAnswer1 ? alert('Верно!') : alert('JavaScript появился в 1995 году!')

const userAnswer2 = confirm(question2)
userAnswer2
  ? alert('Верно!')
  : alert('Спецификация JavaScript называется ECMAScript!')

const userAnswer3 = confirm(question3)
!userAnswer3
  ? alert('Верно!')
  : alert('JavaScript был создан не за 1 месяц, а за 10 дней!')
