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

var lowerArray=["abcdefghijklmnopqrstuvwxyz".split()];
var upperArray=["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split()];
var numberArray=[0,1,2,3,4,5,6,7,8,9];
var symbolArray=["~!@#$%^&*?/".split()];
var passwordArray= []


//Password generator!!

// Did somebody figure out the code to your luggage?

  confirm("If your password is 12345, you need a new one.")


//Prompt user to select length

  function setLength(){
    var passwordLength = prompt("How long should your password be? Please enter a number between 8-128.")
      if (passwordLength >= 8 || passwordLength <= 128){
        console.log("Your password will be " + passwordLength + " characters long."); 
      } else if (passwordLength = NaN){
        prompt("Please enter a number between 8-128")
      } else {
        prompt("Please enter a number between 8-128")
      } 
  }
  
  setLength()

//Conditional variables

var lowers = confirm("Would you like to use lower case letters?");
var uppers = confirm("Would you like to use upper case letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use symbols?");

//If length meets criteria b/w 8-128 characters, prompt user to select character types
  function conditions(){
    
    if (lowers){
      passwordArray=lowerArray.push
    } else if (uppers){
      passwordArray=upperArray.push
    } else if (numbers){
      passwordArray=numberArray.push
    } else if (symbols){
      passwordArray=symbolArray.push
    }
  }

  conditions()
  console.log(passwordArray)


//password array
function buildPassword(){


}


//reset all the things
function panicButton(){

}
