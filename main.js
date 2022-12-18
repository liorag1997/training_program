
let start;
let pause;
let resume ;
let stop ;
let reset ;


let hour ;
let minutes ;
let seconds ;

let secondsTimer;
let interval;

function LoadedDoc(){
    alert(1);

 start = document.getElementById("start");
 pause = document.getElementById("pause");
 resume = document.getElementById("resume");
 stop = document.getElementById("stop");
 reset = document.getElementById("reset");
 hour = document.getElementById("hour");
 minutes = document.getElementById("minutes");
 seconds = document.getElementById("seconds");
 secondsTimer = 0;
 
}

function startTimer() {
  interval = setInterval(()=>{
    secondsTimer++
    
    //concatenate zero to secondTimer number if number less than 9
    const zeropadding = (value) =>{
      return value < 10 ? "0" + value : value;
    }
    
    hour.innerText = zeropadding(Math.floor(secondsTimer / 3600));
    minutes.innerText = zeropadding(Math.floor(secondsTimer / 60 % 60));
    seconds.innerText = zeropadding(parseInt(secondsTimer % 60));
    
  }, 1000);
}

function pauseTimer(){
    clearInterval(interval);
    // delete interval;
}

function resetTimer(){
  	secondsTimer = 0; 
    clearInterval(interval);
    hour.innerText = "00";
    minutes.innerText = "00";
    seconds.innerText = "00";
}

function resumeTimer() {
     //start the timer again
   startTimer();
  
};

function stopTimer() {
  clearInterval(interval);
  // delete interval;
}

//start timer
start.onclick = function() {
  startTimer();
};

//resume timing
resume.onclick = function() {
  resumeTimer();
};

//pause the timer
pause.onclick = function() {
  pauseTimer();
};

//stop the timer
stop.onclick = function() {
  stopTimer();
};

reset.onclick = function(){
  resetTimer();
}
