var seconds = 30,
    timerId,
    title = document.getElementsByTagName('title')[0],
    session = document.getElementById('countdown'),
    buttons = document.querySelectorAll('[data-time]'),
    alarmSound = new Audio('http://soundbible.com/mp3/Zen Buddhist Temple Bell-SoundBible.com-331362457.mp3'),
    beep1 = new Audio('http://soundbible.com/mp3/Bleep-SoundBible.com-1927126940.mp3'),
    beep2 = new Audio('http://soundbible.com/mp3/Beep-SoundBible.com-923660219.mp3')

// Stop countdown when it reaches to 0. Run countdown and update the DOM
function counter(seconds) {
  timerId = setInterval(function() {
    if (this.seconds < 0) {
      this.seconds = 0;
    }
    var secondsLeft = this.seconds--;
    
    if (secondsLeft < 1) {
      alarmSound.play();
      clearInterval(timerId);
    }
    
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function startTimer() {
  clearInterval(timerId);
  // beep1.play();
  return counter(seconds)
}

function stopTimer() {
  clearInterval(timerId);
  // beep2.play();
}

function reset(time) {
  return time;
}
// Need to clear interval to reset timer
function resetTimer() {
  clearInterval(timerId);
  seconds = 30;
  // document.getElementById('startButton').innerText = 'Start';
  displayTimeLeft(seconds);
  title.innerHTML = '30 Second Timer';
}

function displayTimeLeft(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainderSeconds = seconds % 60;
  var display = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
  document.title = display;
  session.textContent = display;
}

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    seconds = parseInt(e.target.dataset.time)
    // reset(seconds);
    startTimer(seconds);
    console.log(parseInt(seconds));
  })
});
// function that I will add as a break timer later...
function breakTime(breakSeconds) {
  clearInterval(timerId);
  var breakSeconds = 300;
  counter(breakSeconds);
}