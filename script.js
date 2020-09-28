// Assignment Code
var generateBtn = document.querySelector("#generate");
// var bigLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var smallLetters = "abcdefghijklmnopqrstuvwxyz";
// var numbers = "1234567890";
// var specialCharacters = "!@#$%^&*()_-=+";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;




  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//prompt for length of password
var passLength = prompt("How long do you want your password to be? (8-128)");
  while (passLength < 8 || passLength > 128) {
    alert("Please choose a number between 8 and 128");
    return;
  }



//confirms for password criteria: Uppercase, Lowercase, Numbers, Special Characters
var bigLetters = confirm ("Do you want to include *Uppercase Letters* ?");
var smallLetters = confirm ("Do you want to include *Lowercase Letters* ?");
var specialCharacters = confirm ("Do you want to include *Special Characters* ?");
var numbers = confirm ("Do you want to include *Numbers* ?");




}