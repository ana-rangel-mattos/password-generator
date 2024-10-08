const displayPassword = document.querySelector(".output-password");
const btnSubmit = document.querySelector(".btn-generate");
const wandSparklesIcon = document.querySelector(".fa-wand-sparkles");
const range = document.getElementById("characters-lenght");
const outputLength = document.querySelector(".output-length");
outputLength.innerHTML = range.value; // Display the default slider value

// Update the current slider value
range.oninput = function() {
  outputLength.textContent = this.value;
}

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}?<>|";

btnSubmit.addEventListener('click', function(){
  range.oninput = function() {
    outputLength.textContent = this.value;
    outputLength.value = this.value;
  }
  
  charactersLength = outputLength.value = range.value;
  
  const checkboxUpperCase = document.getElementById("uppercase");
  const checkboxLowerCase = document.getElementById("lowercase");
  const checkboxNumbers = document.getElementById("numbers");
  const checkboxSymbols = document.getElementById("symbols");
  
  let includeUppercase;
  let includeLowercase;
  let includeNumbers;
  let includeSymbols;
  
  if (checkboxUpperCase.checked) {
    includeUppercase = true;
  }
  if (checkboxLowerCase.checked) {
    includeLowercase = true;
  }
  if (checkboxNumbers.checked) {
    includeNumbers = true;
  }
  if (checkboxSymbols.checked) {
    includeSymbols = true;
  }
  
  let allowedChars = "";
  let password = "";
  
  if (includeUppercase) {allowedChars += uppercaseLetters}
  if (includeLowercase) {allowedChars += lowercaseLetters}
  if (includeNumbers) {allowedChars += numbers}
  if (includeSymbols) {allowedChars += symbols}
  
  if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
    displayPassword.textContent = `Pelo menos uma opção deve ser marcada!`;
  } else {
    for (let i = 1; i <= charactersLength; i++) {
      let randomNumber = Math.floor(Math.random() * allowedChars.length);
      let randomCharacter = allowedChars[randomNumber]
      password += randomCharacter;
    }
    
    displayPassword.textContent = password;

    // Copiar para o clipboard
    const copyEl = document.querySelector('.fa-copy');
      copyEl.addEventListener("click", function(){
      navigator.clipboard.writeText(password);
    });

  }
});

btnSubmit.addEventListener("mouseover", function(){
  btnSubmit.classList.toggle('btn-generate');
  btnSubmit.classList.toggle('btn-generate-hover');
  wandSparklesIcon.classList.toggle('icon-yellow');
})

btnSubmit.addEventListener("mouseout", function(){
  btnSubmit.classList.toggle('btn-generate');
  btnSubmit.classList.toggle('btn-generate-hover');
  wandSparklesIcon.classList.toggle('icon-yellow');
})