var dice1 = "images/dice" + (Math.round(Math.random() * 5) + 1) + ".png";
var dice2 = "images/dice" + (Math.round(Math.random() * 5) + 1) + ".png";
document.querySelectorAll("img")[0].setAttribute("src", dice1);
document.querySelectorAll("img")[1].setAttribute("src", dice2);

if (dice1 === dice2) {
  document.querySelector("h1").innerHTML = "Draw!";
}

if (dice1 > dice2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}

if (dice1 < dice2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
