// Assignment Code
var generateBtn = document.querySelector("#generate");


//be sure to console.log
//use arrays or objects, list of numbers
// to build array use var lowChar ="abc" ".split"("");
//^also google split 



//ex: var numbers = [0,1,2,3,4,5,6,7,9]

//array list of lowercase

//array list of uppercase
//lowercase to uppercase?

//array list of special characters

//to goog:
//return string from charCode random number
//radio buttons (style of button) boolean button, in the html
//document.query selector
//switch cases
//dot value, how it manipulates dom
//how to copy password element after gweneration
//how to save password in local storage


function generatePassword() {



}

//password length
//const passwordLength = prompt()
//confirm use number

//confirm use lowercase

//confirm use uppercase

//confirm use special

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
