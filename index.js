
var randomno1=Math.floor(Math.random()*6)+1;

var randomdice1="images/dice"+" "+randomno1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomdice1);

var randomno2 = Math.floor(Math.random()*6)+1;

var randomdice2 ="images/dice"+" "+randomno2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomdice2);
 

if(randomno1 > randomno2) 
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }
  else if (randomno2 > randomno1)
   {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  