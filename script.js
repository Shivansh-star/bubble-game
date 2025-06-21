function makebubble() {
    let bubbles = "";
    for (var i = 0; i <= 118; i++) {
        const randomNumber = Math.floor(Math.random() * 10);
        bubbles += `<div class="bubble">${randomNumber}</div>`;
    }
    document.querySelector('.bubble-container').innerHTML = bubbles;
}
makebubble();
//-------------------------------------------------------
//hitting the number
var hitNumber = 0;
function numBER() {
    hitNumber = Math.floor(Math.random() * 10);
    let hit = document.querySelector('.num');
    hit.innerHTML = hitNumber;
}
numBER();
//------------------------------------------------------
//timer
var timee = 60;
let x = document.querySelector('.time')
function runtimer() {
    var timeinti = setInterval(() => {
        x.innerHTML = timee;
        if (timee == 0) {
            x.textContent = '0';
            clearInterval(timeinti);
            y.innerHTML = `<h1>GAME OVER!!</h1>` 
        }
        timee--;
    }, 1000);
}
runtimer();
//---------------------------------------------------------
//score
let score = 0;
const scoreEl = document.querySelector('.Score');
function updateScore() {
    score += 10;
    scoreEl.textContent = score;
}
//---------------------------------------------------------
let y = document.querySelector('.bubble-container');
y.addEventListener('click', function (details) {
    var clicledNumber = Number(details.target.textContent);
    if (clicledNumber === hitNumber) {
        updateScore();
        numBER();
        makebubble();
    }
})
