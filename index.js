var p1 = Math.floor(Math.random() * 6) + 1;
var p2 = Math.floor(Math.random() * 6) + 1;
var heading = document.querySelector("h1");
var diceImage1 = "dice" + p1 + ".png";
var diceImage2 = "dice" + p2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src","images/" + diceImage1);
document.querySelectorAll("img")[1].setAttribute("src","images/" + diceImage2);
if(p1 > p2)
{
  heading.innerHTML = "🚩 Player 1 Wins";
}
else if(p1 < p2)
{
  heading.innerHTML = "Player 2 Wins 🚩";
}
else
{
  heading.innerHTML = "Draw...";
}
