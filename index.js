// var message = "Refresh the page and let the site roll the dice! Trust me it's random(wink wink!)";
// alert(message);

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Hehe!! Player 1 Wins!🎊";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Hehe!! Player 2 Wins!🎊";
}
else {
  document.querySelector("h1").innerHTML = "Awww!! It's a Draw!";
}
