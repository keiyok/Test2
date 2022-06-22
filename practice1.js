let countNumber=document.getElementById("countNumber")
let start=document.getElementById("start")
let stop=document.getElementById("stop")
let reset=document.getElementById("reset")

let times=0;
let hours=0;
let minutes=0;
let seconds=0;

let newTimes=0;
let newHours=0;
let newMinutes=0;
let newSeconds=0;

let timeID;

function stopWatch(){
    seconds++;
     if (seconds /10==1){
        minutes++;
        seconds=0;
     if (minutes /10==1){ 
         hours++;
         minutes=0;
     if(hours /10==1){
         times++;
         hours=0;
     }
     
     }
     }
    
    if(seconds<10){
        newSeconds ="0" + seconds;
    }else{
        newSeconds=seconds
    }
    
    if(minutes<10){
        newMinutes ="0" + minutes;
    }else{
        newMinutes=minutes
    }
    
    if(hours<10){
        newHours ="0" + hours;
    }else{
        newHours=hours
    }
    
    if(times<10){
        newTimes ="0" + times;
    }else{
        newTimes=times
    }
    
    
    countNumber.innerHTML= times+":"+hours+":"+minutes+":"+seconds;
}

start.addEventListener("click",function(){
    timeID=setInterval(stopWatch,100)
    stop.disabled = false;
  start.disabled = true;
  reset.disabled = false;
})

stop.addEventListener("click", function(){
  clearInterval(timeID);
  stop.disabled = true;
  start.disabled = false;
  reset.disabled = false;
})

reset.addEventListener("click", function(){
  clearInterval(timeID);
  times = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  countNumber.innerHTML = "0:0:0:0";
  stop.disabled = true;
  start.disabled = false;
  reset.disabled = true;
 
})
