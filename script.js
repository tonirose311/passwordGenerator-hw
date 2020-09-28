// Assignment Code
var generateBtn = document.querySelector("#generate");
var bigLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var smallLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*()_-=+";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  //prompt for length of password
  
  
  
  //prompt for password criteria: Uppercase, Lowercase, Numbers, Special Characters


  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

}