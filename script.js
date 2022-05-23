// DICE ONE
// Returns a random integer from 1 to 6, for the first dice: 
const diceOneRandomNum = Math.floor(Math.random() * 6) + 1;
// Linking images to the generated numbers | For the first dice
// by concatenating, diceOneImage becomes equal to assets/diceX.png where X is from 1 to 6
const diceOneImage = 'assets/dice' + diceOneRandomNum + '.png';
// Putting the generated random image into the img1 class.
document.getElementsByClassName("img1")[0].setAttribute('src', diceOneImage);


// DICE TWO
// Returns a random integer from 1 to 6, for the first dice: 
const diceTwoRandomNum = Math.floor(Math.random() * 6) + 1;
// Linking images to the generated numbers | For the second dice
const diceTwoImage = 'assets/dice' + diceTwoRandomNum + '.png';
// Putting the generated random image into the img2 class.
document.getElementsByClassName("img2")[0].setAttribute('src', diceTwoImage);


// Changing the title depending on the winner
if (diceOneRandomNum > diceTwoRandomNum) {
  document.getElementsByTagName('h1')[0].innerHTML = "Player 1 Wins!";
}
else if (diceOneRandomNum < diceTwoRandomNum) {
  document.getElementsByTagName('h1')[0].innerHTML = "Player 2 Wins!";
}
else {
  document.getElementsByTagName('h1')[0].innerHTML = "Draw!";
}
// use this :triangular_flag_on_post: emoji 