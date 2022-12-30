const btnStart=document.querySelector('.start');
const btnStop=document.querySelector('.stop');
const btnReset=document.querySelector('.reset');

let hr=0;
let min=0;
let sec=0;
let timer;

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

btnStart.addEventListener('click',function(){
    timer=setInterval(callTimer,10)
});

btnStop.addEventListener('click',function(){
    clearInterval(timer);
})


btnReset.addEventListener('click',function(){
    clearInterval(timer);
    hr = 0;
    min = 0;
    sec = 0;
    document.getElementById("timer").innerHTML = hr + ":" + min + ":" + sec;
})
