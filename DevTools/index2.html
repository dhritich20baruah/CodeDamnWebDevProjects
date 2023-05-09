<!DOCTYPE html>
<html>
  <head>
    <title>WebDev</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Poppins&display=swap');
    body {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: whitesmoke;
      font-family: Verdana;
    }
    button {
      margin: 0.2em;
      border: none;
      background-color: green;
      color: white;
      padding: 1em;
    }
    button:hover {
      cursor: pointer;
      color: green;
      background-color: white;
      border: 1px solid green;
    }
    #display {
      height: 1.5em;
      width: auto;
      color: orangered;
      margin: 1em;
      font-size: 2em;
      font-family: 'Orbitron', sans-serif;
    }
    input {
      padding: 1em;
      border: none;
    }
  </style>
  <body>
    <h1>Timer on web</h1>
    <h2>Enter start time</h2>
    <div oninput="displaymin()">
      <input type="number" id="hours" min="0" max="23" placeholder="hrs" /> :
      <input type="number" id="minutes" min="0" max="59" placeholder="mins" /> :
      <input type="number" id="seconds" min="0" max="59" placeholder="secs" />
    </div>
    <div id="display"></div>
    <div>
      <button id="start" onclick="watch()">Start</button>
    </div>

    <script src="https://bit.ly/codedamn-web-console"></script>
    <script>
      let hrs = document.getElementById("hours");
      let mins = document.getElementById("minutes");
      let secs = document.getElementById("seconds");
      let display = document.getElementById("display");
      let start = document.getElementById("start");
      let timer;

      function displaymin() {
        display.innerHTML =
          (hours.value > 1 ? hours.value : "0" + hours.value) +
          ":" +
          (minutes.value > 9 ? minutes.value : "0" + minutes.value) +
          ":" +
          (seconds.value > 9 ? seconds.value : "0" + seconds.value);
      }

      function watch() {
        start.disabled = true;//the start button will be disabled once the timer starts
        hrs.disabled = true;
        mins.disabled = true;
        secs.disabled = true;
        var date1 = new Date();//today's date
        var countDownDate = new Date(); //time from which the countdown will start
        countDownDate.setTime(
          date1.getTime() + hours.value * 60 * 60 * 1000 + 
            minutes.value * 60 * 1000 +
            seconds.value * 1000 +
            1 * 1000
        );

        // Update the count down every 1 second
        var x = setInterval(function () {
          // Get today's date and time
          var now = new Date().getTime();

          // Find the distance between now and the count down date
          var distance = countDownDate - now;

          // Time calculations for minutes and seconds
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Display the result in the element with id="display"
          display.innerHTML =
            (hours.value > 1 ? hours : "0" + hours) +
            ":" +
            (minutes > 9 ? minutes : "0" + minutes) +
            ":" +
            (seconds > 9 ? seconds : "0" + seconds);
          
          var audio = new Audio("la-cucaracha-horn.mp3");

          // If the count down is finished, play audio file
          if (display.innerHTML == "00:00:00") {
            clearInterval(x);
            audio.play()
          }
        }, 1000);
      }
    </script>
  </body>
</html>
