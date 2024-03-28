const passwordBox = document.getElementById("password");
// alert("Inputdata" + lenght)  ;

// console.log(lenght);

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const number = "0123456789";

const symbols = "!@#$%^&*()_+~`[]{}:;'<>?,./";

const allChars = upperCase + lowerCase + number + symbols;

function createPassword() {
  var lenght = document.querySelector("#length").value;
  let password = "";
  console.log(lenght);
  console.log(lenght);
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  console.log(password, Math.floor(Math.random() * upperCase.length));

  while (lenght > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
  alert("Password copied to clipboard");
}

// Get the button and toast message elements
const button = document.getElementById("myButton");
const toastMessage = document.getElementById("toastMessage");

// Add event listener for mouseover event
button.addEventListener("mouseover", () => {
  // Show the toast message
  toastMessage.style.display = "block";

  // Hide the toast message after 2 seconds (2000 milliseconds)
  setTimeout(() => {
    toastMessage.style.display = "none";
  }, 2000);
});
