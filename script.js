
const startButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");
const timerText = document.getElementById("stopwatch");
let isClicked = false;
let timeStart;

let timeCount = 0;
function timeUpdate(){
    timeCount += 1;
    const hours = Math.floor(timeCount/3600);
    const minutes = Math.floor((timeCount%3600)/60);
    const seconds = timeCount%60;
    timerText.textContent = `${actualTime(hours)}:${actualTime(minutes)}:${actualTime(seconds)}`
}

startButton.addEventListener('click', ()=>{
    if(!isClicked){
        startButton.textContent = 'Stop';
        timeStart = setInterval(timeUpdate, 1000);
    }else{
        clearInterval(timeStart);
        startButton.textContent = 'Start';
    }
    isClicked = !isClicked;
});

actualTime = (time)=>{
    return (time<10?'0':'')+time;
}


