
const startButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");
const timerText = document.getElementById("stopwatch");
const miliText = document.getElementById("mili-span");
let isClicked = false;
let timeStart;

let timeCount = 0;
function timeUpdate(){
    timeCount += 1;
    const miliSec = Math.floor(timeCount%100);
    const hours = Math.floor(timeCount/360000);
    const minutes = Math.floor((timeCount%3600)/6000);
    const seconds = Math.floor(timeCount/100)%60;
    timerText.textContent = `${actualTime(hours)}:${actualTime(minutes)}:${actualTime(seconds)}`;
    miliText.textContent = `${actualTime(miliSec)}`;
}

startButton.addEventListener('click', ()=>{
    if(!isClicked){
        startButton.textContent = 'Stop';
        timeStart = setInterval(timeUpdate, 10);
    }else{
        clearInterval(timeStart);
        startButton.textContent = 'Start';
    }
    isClicked = !isClicked;
});

resetButton.addEventListener('click',()=>{
    timeCount = 0;
    timerText.textContent = '00:00:00';
    miliText.textContent = '00';
    clearInterval(timeStart);
    startButton.textContent = 'Start';
    isClicked = !isClicked;
})

actualTime = (time)=>{
    return (time<10?'0':'')+time;
}


