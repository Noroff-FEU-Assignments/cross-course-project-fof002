//FORM validation

const email = document.querySelector("#email");
const submitButton = document.querySelector(".submitButton");
const emailError = document.querySelector(".emailError");
const form = document.querySelector("#form");
const firstName = document.querySelector("#firstname");
const firstNameError = document.querySelector(".firstNameError");

form.addEventListener("submit", validateForm);

function validateForm (event) {

    event.preventDefault();

    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }
    if (checkLength(firstName,0)) {
        firstNameError.style.display = "none";
    }
    else {
        firstNameError.style.display = "block";
    }
  }

  function checkLength (input, len) {
    let lengthOfInput = input.value.trim().length;
    if (lengthOfInput < len) {        
        return true;
    }
    else {
        return false;
    }
  }

function validateEmail(email) {

    const regEx = /\S+@\S+\.\S+/;

    const patternMatches = regEx.test(email);

    return patternMatches;

}