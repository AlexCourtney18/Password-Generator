// Assignment code here
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var character = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];

// 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var charLength = parseInt(window.prompt("How long would you like your password to be? Please enter a length between 8-128 characters."));
  if (charLength < 8) {
    window.alert("The password is too short!");
    writePassword();
  }
  if (charLength > 128) {
    window.alert("The password is too long! ");
    writePassword();
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
    pw = lowerCase.concat(upperCase, number, character)
  }

  else if (lowerConfirm && upperConfirm && numberConfirm) {
    pw= lowerCase.concat(upperCase, number);
  }

  
  for (var i = 0; i < charLength; i++) {
    var password = lowerCase[Math.floor(Math.random() * lowerCase.length)];
  }
  
  
  //var shuffle = lowerCase.sort(() => Math.random() - 0.5);
  //var password = shuffle.slice(0, charLength)
  //var password = lowerCase[Math.floor(Math.random() * lowerCase.length)];
  //var password = generatePassword();
  //var password = ("TEST");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Generate Password logic:
// How long would you like your password to be?
// If less than 8 characters: error
// If more than 128 characters: error

// When input is between 8-128 characters, prompt "would you like to include lower case letters?"
// if confirm: include var lowerCase array
//if !confirm: no dot include var lowerCase array

// "Would you like to include upper case letters?"
// If confirm: include var upperCase array
// If !confirm: do not include var upperCase array

// "Would you like to include numbers?"
// If confirm: include var number
// if !confirm: do not include var number

// "Would you like to include special characters?"
// If confirm: include var character
// If !confirm: do not include var character

// Generate password var charLength long, include var lowerCase if true, include var upperCase if true, include var number if true, include var character if true