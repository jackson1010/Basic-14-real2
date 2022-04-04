var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var myOutputValue = "";

  while (input !== 0) {
    myOutputValue += "©";
    input -= 1;
  }
  return myOutputValue;
};

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var myOutputValue = "";

  for (var i = 0; i < input; i++) {
    for (var j = 0; j < input; j++) {
      myOutputValue += "©";
    }
    myOutputValue += "<br>";
  }

  return myOutputValue;
};

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceRoll = function () {
  var randomDice = Math.floor(Math.random() * 6 + 1);
  return 2;
};

var mode1 = false;
var numbers = [];
var myOutputValue = "";
var counts = 0;
var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  if (mode1 == false) {
    var numberOfDice = input;
    mode1 = true;
  }
  for (var i = 0; i < numberOfDice; i++) {
    numbers[i] = diceRoll();
    myOutputValue += "You rolled " + numbers[i] + ".";
    myOutputValue += "<br>";
    if (input == numbers[i]) {
      counts += 1;
    }
  }
  if (counts > 0) {
    myOutputValue += "You Win";
  } else myOutputValue += "You Lose";

  return myOutputValue;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
