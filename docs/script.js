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
  //   math.floor(math.random()*number.length)
  //  }
  //  if (upper === true){
  //   math.floor(math.random()*upper.length)
  //  }
  //  if (lower === true){
  //   math.floor(math.random()*lower.length)
  //  }
  //  if (special === true){
  //   math.floor(math.random()*special.length)
  //  } if (number === false && upper === false && lower === false && special === false) {
  //    alert("Must select an option.");
  //    return;
  //  }

  if (numberQ) {
    charColl += number;
  }
  if (upperQ) {

  }
  if (lowerQ) {

  }
  if (specialQ) {

  }
  if (number === false && upper === false && lower === false && special === false) {
    alert("Must select an option.");
    return;
  }

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
  //   return String.fromCharCode(math.floor(math.random()*26)+65);
  // }

  // function getLowerCase(){
    //   return String.fromCharCode(math.floor(math.random()*26)+97);
    // }

    // function getNumber(){
      //   return String.fromCharCode(math.floor(math.random()*26)+10);
      // }

      // function getSpecial(){
        //   var special = "!@#$%^&*()[]{}<>,-~?"
        //   return special[math.floor(math.random()*special.length)];
        // }



// var generatePass = {
        //   upper : getUpperCase,
        //   lower : getLowerCase,
        //   number : getNumber,
        //   special : getSpecial
        // };