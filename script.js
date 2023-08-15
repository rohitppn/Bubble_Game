var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function decScore() {
  score -= 10;
  document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 168; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer() {
  var timerr = setInterval(function () {
    if (timer > 0) {
      timer--;
    } else {
      clearInterval(timerr);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }

    document.querySelector("#timerVal").textContent = timer;
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickednum = Number(details.target.textContent);

  if (clickednum == hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  } else {
    decScore();
  }
});

runTimer();
makeBubble();
getNewHit();
