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


//password arrays
let lowerArray=["abcdefghijklmnopqrstuvwxyz"];
let upperArray=["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let numberArray=["0123456789"];
let symbolArray=["~!@#$%^&*?/"];


//Password generator!!

// Did somebody figure out the code to your luggage?

  confirm("If your password is 12345, you need a new one.")


//Prompt user to select length

  function setLength(){
    var passwordLength = prompt("How long should your password be? Please enter a number between 8-128.")
      if (passwordLength > 7 || passwordLength < 129){
        confirm("Would you like to use lower case letters?") 
      } else prompt("Please enter a number between 8-128")
  }
  setLength()

//If length meets criteria b/w 8-128 characters, prompt user to select character types
//lowercase
  function chooseLower(){
    
  

}
//Choose at least 1 character type

//password array
function buildPassword([]){

}


//reset all the things
function panicButton(){

}
