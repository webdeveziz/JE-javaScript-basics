// Задание #1

const existedUserLogin = 'the_best_user'
const existedUserPassword = '12345678'

const userLogin = prompt('Введите логин').trim()
const userPassword = prompt('Введите пароль').trim()

if (existedUserLogin === userLogin && existedUserPassword === userPassword)
  alert(`Добро пожаловать, ${userLogin}!`)
else alert('Логин или Пароль введены неверно!')
