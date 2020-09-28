// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//prompt for length 
  function generatePassword(){
    var passLength = prompt("How long do you want your password to be? (8-128)");

    //confirm what you want to include in password
    var numbers = confirm("Do you want to include *Numbers* ?");
    var bigLetters = confirm("Do you want to include *Uppercase Letters* ?");
    var smallLetters = confirm("Do you want to include *Lowercase Letters* ?");
    var specialCharacters = confirm("Do you want to include *Special Characters* ?");
  }





}