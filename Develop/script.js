// Assignment Code
const generateBtn = document.querySelector("#generate");




//be sure to console.log
//use arrays or objects, list of numbers
// to build array use var lowChar ="abc" ".split"("");
//^also google split 

//radio buttons assigned to toggle each function

function getRandomUpperCase(){
  return String.fromCharCode(math.floor(math.random()*26)+65);
}

function getRandomLowerCase(){
  return String.fromCharCode(math.floor(math.random()*26)+97);
}

function getRandomNumber(){
  return String.fromCharCode(math.floor(math.random()*26)+10);
}

function getRandomSpecial(){
  var special = "!@#$%^&*()[]{}<>,-~?"
  return special[math.floor(math.random()*special.length)];
}

//potentially turn functions into variables?
//figure out if math.random has to be used to return random values

var generatePass = {
  upper : getRandomUpperCase,
  lower : getRandomLowerCase,
  number : getRandomNumber,
  special : getRandomSpecial
};

//console.log(generatePass);
//ex: var numbers = [0,1,2,3,4,5,6,7,9] for arrays, lower, upper, special

//asks for what values in password
function generatePassword() {
  confirm(getRandomLowerCase);
  confirm(getRandomUpperCase);
  confirm(getRandomNumber);
  confirm(getRandomSpecial);

}

//console.log(generatePassword)
//password length
//const passwordLength = prompt()
//confirm use number
//confirm use lowercase
//confirm use uppercase
//confirm use special
// Write password to the #password input, using prompt()

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//pushes password into text area

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//to do for enhanced functionality:
//radio buttons (style of button) boolean button, in the html
//how to copy password element after generation
//how to save password in local storage
