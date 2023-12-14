const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const chronometer = document.querySelector("button");
chronometer.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...

  let count = 10;
  const timer = setInterval(function () {
    document.getElementById("time").innerHTML = count;
    document.getElementById("start-btn").disabled = true;

    if (count === 0) {
      clearInterval(timer);
      showToast();
      document.getElementById("start-btn").disabled = false;
    }
    count -= 1;
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const list = document.getElementById("toast").classList;
  list.add("show");

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
