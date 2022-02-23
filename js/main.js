import { printError, printREsult, showTimer, timerError } from './printResult.js';
import { switcher } from './switch.js';
import getDateDiff from './getDateDiff.js';
import timer from "./taimer.js";
import '../css/main.css';

const switcherBtn = document.querySelector('.switchBtn');

switcherBtn.onclick = ()=>{switcher()};
export const form = document.getElementById('datecalc');


form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target)

  const firsDate = formData.get('firstDate')
  const secondDate = formData.get('secondDate')

  if (!firsDate || !secondDate) {
    printError('Oooooopppsss - введите текст!!!!')
  } else {
    const dateDiff = getDateDiff(firsDate, secondDate)
    printREsult(dateDiff)
  }
}

export const timerForm = document.getElementById('timer');

timerForm.onsubmit = (event) => {
  event.preventDefault();
  const timerData = new FormData(event.target);
  const timerTime = timerData.get('timerInput').split(':');
  if (timerTime.length < 3){
    timerError()
  } else{
    timer(timerTime);
  }

  console.log(timerTime);
  /*const timerTimeofDate = new Date (`Thu, 01 Jan 1970 ${timerTime}`);
  const hours = timerTimeofDate.getHours();
  const minut = timerTimeofDate.getMinutes();
  const seconds = timerTimeofDate.getSeconds();
  console.log(hours , minut ,seconds);*/
}