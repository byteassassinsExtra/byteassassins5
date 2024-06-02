// Show initial alerts
alert("HACKED BY Indian hackers");
alert("जय हिंद, वन्दे मातरम्");

// Function to play the audio
function playAudio() {
  const audio = document.getElementById('byteAudio');
  audio.play();
}

// Add event listener to the body element
document.body.addEventListener('click', playAudio);

// Show an alert when the body is clicked
aa.addEventListener('click', () => {
  alert("YOU ARE HACKED!");
});

// Function to update the digital clock
function digitalClock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
  document.getElementById('clock').innerHTML = strTime;
  setTimeout(digitalClock, 1000);
}

// Initialize the digital clock
digitalClock();
