// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// this chooses a random number from min to max value. min being 0 and max being 128
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min* (1 - rand) + rand*max)
}
// because lists start at 1 you have to substract it by one to start at 0
function randomChoice(list) {
 return list [randomInt(0, list.length - 1)]
}

function generatePassword() {
  var input = prompt("How many characters would you like your password to be?")
  var  passwordNumber = parseInt(input)
  if (isNaN(passwordNumber)) {
    alert("That is not a number")
    return
  }
  // made it so that if you input something that isnt a number than you cant continue with the function 
  // made sure that the password cant be less than 8 but no more than 128
  if (passwordNumber < 8 || passwordNumber > 128) {
    alert("Password mus be between 8-128 characters")
    return
  }
  // made alerts on the website stating to confirm ok if you wanted to include any of the variables to your password
  var symbol = confirm("Click OK to include special characters")
  var numaric = confirm("Click OK to include numaric characters")
  var lowercase = confirm("Click OK to include lowercase characters")
  var uppercase = confirm("Click OK to include uppercase characters")
// made a list for all the numbers, symbols and uppercase/lowercase
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W" , "X", "Y", "Z"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// made a container for all the lists, this way you can choose which list you want your passsword to include
  var listContainer = []
// made if statements saying if true push the variable to the container list for the final password
  if (input === true) {
    listContainer.push(numberList)
  }

  if (symbol === true) {
    listContainer.push(symbolList)
  }

if (numaric === true) {
  listContainer.push(numberList)
}

if (uppercase === true) {
  listContainer.push(uppercaseList)
}

if (lowercase === true) {
  listContainer.push(lowercaseList)
}
// made a default if nothing is selected
if (listContainer.length === 0) {
  listContainer.push(lowercaseList)
}
// this is the string that the for loop reiterates 
var finalPassword = ""
// this chooses a random list that a user selects
for (var i = 0; i < passwordNumber; i++) {
  var randomList = randomChoice(listContainer)
  var randomCharacter = randomChoice(randomList)
  finalPassword += randomCharacter
}
// a return funtion to the final password to be shown on website
return finalPassword
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


