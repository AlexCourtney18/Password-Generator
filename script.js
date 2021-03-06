// Assignment code here
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var character = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
//var password = [];
//let text = password.join("");

// 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var charLength = parseInt(window.prompt("How long would you like your password to be? Please enter a length between 8-128 characters."));
  if (charLength < 8) {
    window.alert("The password is too short!");
    return false;
  }
  if (charLength > 128) {
    window.alert("The password is too long! ");
    return false;
  }
  console.log("Password length " + charLength);

  var lowerConfirm = window.confirm("Would you like to include lower case letters?");
  if (lowerConfirm) {
    window.alert("Lower case letters will be included");
  }
  else if (!lowerConfirm) {
    window.alert("Lower case letters will NOT be included");
  }
  console.log(" lowerConfirm is " + lowerConfirm);

  var upperConfirm = window.confirm("Would you like to include upper case letters?");
  if (upperConfirm) {
    window.alert("Upper case letters will be included");
  }
  else if (!upperConfirm) {
    window.alert("Upper case letters will NOT be included");
  }
  console.log(" upperConfirm is " + upperConfirm);

  var numberConfirm = window.confirm("Would you like to include numbers?");
  if (numberConfirm) {
    window.alert("Numbers will be included");
  }
  else if (!numberConfirm) {
    window.alert("Numbers will NOT be included");
  }
  console.log(" numberConfirm is " + numberConfirm);

  var characterConfirm = window.confirm("Would you like to include special characters?");
  if (characterConfirm) {
    window.alert("Special characters will be included");
  }
  else if (!characterConfirm) {
    window.alert("Special characters will NOT be included");
  }
  console.log(" characterConfirm is " + characterConfirm);

  if (!lowerConfirm && !upperConfirm && !numberConfirm && !characterConfirm) {
    window.alert("You must select at least one criteria silly!!");
    writePassword();
  }

  // Criteria possiblity statements
  else if (lowerConfirm && upperConfirm && numberConfirm && characterConfirm) {
    pw = lowerCase.concat(upperCase, number, character);
  }

  else if (lowerConfirm && upperConfirm && numberConfirm) {
    pw = lowerCase.concat(upperCase, number);
  }

  else if (lowerConfirm && upperConfirm && characterConfirm) {
    pw = lowerCase.concat(upperCase, character);
  }

  else if (lowerConfirm && numberConfirm && characterConfirm) {
    pw = lowerCase.concat(number, character);
  }

  else if (upperConfirm && numberConfirm && characterConfirm) {
    pw = upperCase.concat(number, character);
  }

  else if (lowerConfirm && upperConfirm) {
    pw = lowerCase.concat(upperCase);
  }

  else if (lowerConfirm && numberConfirm) {
    pw = lowerCase.concat(number);
  }

  else if (lowerConfirm && characterConfirm) {
    pw = lowerCase.concat(character);
  }

  else if (upperConfirm && numberConfirm) {
    pw = upperCase.concat(number);
  }

  else if (upperConfirm && characterConfirm) {
    pw = upperCase.concat(character);
  }

  else if (numberConfirm && characterConfirm) {
    pw = number.concat(character);
  }

  else if (lowerConfirm) {
    pw = lowerCase;
  }

  else if (upperConfirm) {
    pw = upperCase;
  }

  else if (numberConfirm) {
    pw = number;
  }

  else if (characterConfirm) {
    pw = character;
  }

  var password = [];

  for (var i = 0; i < charLength; i++) {
    var pass = pw[Math.floor(Math.random() * pw.length)];
    password[i] = pass;

  }
  

  let text = password.join("");

  var passwordText = document.querySelector("#password");

  passwordText.value = text;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
