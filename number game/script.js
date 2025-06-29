function MakeBubble() {
  var clutter = "";

  for (let i = 1; i <= 150; i++) {
    let random = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${random}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 30;
var Score = 0;
var hitrn = 0;
function IncreaseScore() {
  Score += 1;
  document.querySelector("#scoreval").textContent = Score;
}
function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}
function RunTimer() {
  var timerin = setInterval(function () {
    if (timer > 0) {
      timer--;
    } else {
      clearInterval(timerin);
     
      document.querySelector("#pbtm").style.display = "none"; 
            let gameOverMessage = document.createElement("div");
            gameOverMessage.textContent = `Your time is up. Your score is ${Score}`;
            gameOverMessage.style.fontSize = "36px"; 
            gameOverMessage.style.textAlign = "center"; 
            document.querySelector("#pbtm").parentNode.appendChild(gameOverMessage);
    }

    document.querySelector("#timervalue").textContent = timer;
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickedno = Number(details.target.textContent);
  if (clickedno === hitrn) {
    IncreaseScore();
    MakeBubble();
    getNewHit();
  }
});
getNewHit();
RunTimer();
MakeBubble();
