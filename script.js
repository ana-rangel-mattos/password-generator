const range = document.getElementById("characters-lenght");
const outputLenght = document.querySelector("output-length");
outputLenght.innerHTML = range.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
range.oninput = function() {
  outputLenght.textContent = this.value;
}

const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "?", "<", ">", "|"];

let includeUppercase;
const checkboxUpperCase = document.getElementById("uppercase");
if (checkboxUpperCase.checked) {
  includeUppercase = true;
}
