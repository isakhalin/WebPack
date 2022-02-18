const result = document.getElementById('datecalc__result')
const resultTimer = document.getElementById('timer_result');

export const printError = (errText) => {
  result.innerText = errText
};

export const printREsult = ({ years, months, days }) => {
  result.innerText = `Год: ${years} - Месяц: ${months} - День: ${days}`
};

export const showTimer = ([hour, minutes, seconds]) => {
  resultTimer.innerText = `Времени осталось: ${hour}:${minutes}:${seconds}`
};

export const timerError = () => {
  resultTimer.innerText = 'Введите все значения, Все значения не могут равняться 0!'
};