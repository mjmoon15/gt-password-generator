// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Global variables

var lowerArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolArray = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "?"];
var passwordArray = [];

//Password generator!!

// Did somebody figure out the code to your luggage?

confirm("If your password is 12345, you need a new one.");

//Prompt user to select length and specify character type

function setLength() {
  var passwordLength = prompt(
    "How long should your password be? Please enter a number between 8-128."
  );
  var requestedPasswordLength = isNaN(passwordLength);

  if (requestedPasswordLength === true) {
    prompt("Please enter a number between 8-128");
  } else if (requestedPasswordLength < 8 || requestPasswordLength > 128) {
    prompt("Please enter a number between 8-128");
  } else {
    console.log(requestedPasswordLength);
    return requestedPasswordLength;
  }
}
setLength();

//Input selection and concat 

var lowers = confirm("Would you like to use lower case letters?");
var uppers = confirm("Would you like to use upper case letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use symbols?");
var masterPass = [];
if (lowers) {
  masterPass = passwordArray.concat(lowerArray);
  console.log(masterPass);
}
if (uppers) {
  masterPass = passwordArray.concat(masterPass, upperArray);
  console.log(masterPass);
}
if (numbers) {
  masterPass = passwordArray.concat(masterPass, numberArray);
  console.log(masterPass);
}
if (symbols) {
  masterPass = passwordArray.concat(masterPass, symbolArray);
  console.log(masterPass);
}
console.log(masterPass);

//Password arrays assemble!
function buildPassword(masterPass) {
  for (i = 0; i < passwordLength.length - 1; i++) {
    Math.floor(Math.random() * masterPass)
  } 
  
}



