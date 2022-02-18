import { showTimer } from './printResult.js'
import { timerForm } from "./main.js";
import { sound } from "./sound.js"

const soundBtn = document.getElementById('stop_timer');
soundBtn.onclick = (event)=>{
    event.preventDefault()
    sound.stop()
    };

function timer(timerArr) {
    const timerInterval = setInterval( () => {
       timerArr[2]--;
       if(timerArr[0] == 0 && timerArr[1] ==0 && timerArr[2] ==0){
           sound.play();
           clearInterval(timerInterval);
       }
       else if(timerArr[2] == -1){
          timerArr[2] = 59;
          timerArr[1]--;
       }
       else if(timerArr[1] == -1){
           timerArr[1] = 59;
           timerArr[0]--;
       }
       const hour = timerArr[0];
       const minutes = timerArr[1];
       const seconds = timerArr[2];

       showTimer([hour,minutes,seconds]);
       },
      1000)

    timerForm.onreset = (event) => {
      clearInterval(timerInterval);
    }
}

export default timer;