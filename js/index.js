// selecting all the buttons
const btnStart=document.querySelector('.start');
const btnStop=document.querySelector('.stop');
const btnReset=document.querySelector('.reset');

// intialize hr,min,sec of stop watch to zero
let hr=0;
let min=0;
let sec=0;
let timer;

//calltimer function--
// first increase seconds
// when second reaches 99 then set sec to 0 and start increasing mins
// when min reaches 60 then set min to 0 and start increasing hrs
function callTimer() {
    sec++;
    if (sec < 100) {
        if (sec === 99) {
            sec = 0;
            min++;
            if (min === 60)  {
                min = 0;
                hr++;
            }
        }
    }
    else{
        sec = 0;
    }
    document.getElementById("timer").innerHTML = hr + ":" + min + ":" + sec;
}

//when start button is clicked timer should start 
btnStart.addEventListener('click',function(){
    timer=setInterval(callTimer,10)
});

//when stop button is clicked the timer should stop with its current timestamp 
btnStop.addEventListener('click',function(){
    clearInterval(timer);
})

//when reset button is clicked then timer should reset to initial values 
btnReset.addEventListener('click',function(){
    clearInterval(timer);
    hr = 0;
    min = 0;
    sec = 0;
    document.getElementById("timer").innerHTML = hr + ":" + min + ":" + sec;
})
