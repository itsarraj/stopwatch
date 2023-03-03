// Defining important Variables
var milliseconds = 0,
  seconds = 0,
  minutes = 0;

//Setting up the Counter
var counter;

// start , stop , reset and time querySelectors Setups
const start = document.querySelector(".start");
const stop_timer = document.querySelector(".stop");
const reset_timer = document.querySelector(".reset");
const time = document.querySelector(".time");

// start of stopwatch with ckick event
start.addEventListener("click", function () {
  if (!counter) {
    counter = setInterval(run, 1000); // setInterval with 10ms
  }

  function run() {
    time.textContent = currentTime();
    milliseconds++;
    if (milliseconds == 1) {
      // when 1000ms hit , seconds incremented & milliseconds set to 0
      milliseconds = 0;
      seconds++;
    }
    if (seconds == 60) {
      // when 60s hit , minutes incremented & seconds set to 0
      seconds = 0;
      minutes++;
    }
  }
});

// stop of stopwatch with ckick event
stop_timer.addEventListener("click", function () {
  clearInterval(counter);
  counter = false;
});

// reset of stopwatch with ckick event
reset_timer.addEventListener("click", function () {
  clearInterval(counter);
  counter = false;
  (milliseconds = 0), (seconds = 0), (minutes = 0);
  time.textContent = currentTime();
  resetTimerInnerHTML();
});

// current time function
function currentTime() {
  return minutes + ":" + seconds;
}

// reset timer with 00:00
// as normal number reset will
// only reset to 0:0 ,
// so we need to change the inner html
function resetTimerInnerHTML() {
  time.innerHTML = `<div class="time">00:00</div>`;
}
