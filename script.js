// Returns a random integer from 1 to 6, for the first dice: 
const diceOneRandomNum = Math.floor(Math.random() * 6) + 1;

// Linking images to the generated numbers | For the first dice
// by concatenating, diceOneImage becomes equal to assets/diceX.png where X is from 1 to 6
const diceOneImage = 'assets/dice' + diceOneRandomNum + '.png';

// Returns a random integer from 1 to 6, for the first dice: 
const diceTwoRandomNum = Math.floor(Math.random() * 6) + 1;

// Linking images to the generated numbers | For the second dice
const diceTwoImage = 'assets/dice' + diceTwoRandomNum + '.png';