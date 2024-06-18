let secondsElasped=0
let Interval=null
const time=document.getElementById("time")

function setPad(value){
    return String(value).padStart(2,"0")
}

function setTime(){
    const minute=Math.floor(secondsElasped/60)
    const second=secondsElasped%60
    time.innerHTML=`${setPad(minute)}:${setPad(second)}`
}

function timer(){
    secondsElasped++
    setTime()
}

function startClock(){
    if(Interval) stopClock()
    Interval=setInterval(timer,1000)   
}

function stopClock(){
    clearInterval(Interval)
}

function resetClock(){
    stopClock()
    secondsElasped=0
    setTime()
}