const generateBtn = document.querySelector("#generate");

var number = "0123456789";
var special = "!@#$%^&*()_-+={}[]/<>,.;':";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = upper.toLowerCase();

var charColl = "";

//asks for what values in password
function generatePassword() {

  var passwordLength = 16;

  numberQ = confirm("Would you like numbers?");
  upperQ = confirm("Would you like upper case letters?");
  lowerQ = confirm("Would you like lower case letters?");
  specialQ = confirm("Would you like special characters?");



  //  if (number === true){
  //   Math.floor(Math.random()*number.length)
  //  }
  //  if (upper === true){
  //   Math.floor(Math.random()*upper.length)
  //  }
  //  if (lower === true){
  //   Math.floor(Math.random()*lower.length)
  //  }
  //  if (special === true){
  //   Math.floor(Math.random()*special.length)
  //  } if (number === false && upper === false && lower === false && special === false) {
  //    alert("Must select an option.");
  //    return;
  //  }

  if (numberQ) {
    charColl += number;
  }
  if (upperQ) {
    charColl += upper;
  }
  if (lowerQ) {
    charColl += lower;
  }
  if (specialQ) {
    charColl += special;
  }
  if (number === false && upper === false && lower === false && special === false) {
    alert("Must select an option.");
    return;
  }

  var genRandom = "";

  for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * charColl.length)
    
    genRandom += charColl[random];
  }
  return genRandom;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


//to do for enhanced functionality:
//radio buttons (style of button) boolean button, in the html
//how to copy password element after generation
//how to save password in local storage


//use following for more effienct calling of characters
// function getUpperCase(){
  //   return String.fromCharCode(Math.floor(Math.random()*26)+65);
  // }

  // function getLowerCase(){
    //   return String.fromCharCode(Math.floor(Math.random()*26)+97);
    // }

    // function getNumber(){
      //   return String.fromCharCode(Math.floor(Math.random()*26)+10);
      // }

      // function getSpecial(){
        //   var special = "!@#$%^&*()[]{}<>,-~?"
        //   return special[Math.floor(Math.random()*special.length)];
        // }



// var generatePass = {
        //   upper : getUpperCase,
        //   lower : getLowerCase,
        //   number : getNumber,
        //   special : getSpecial
        // };