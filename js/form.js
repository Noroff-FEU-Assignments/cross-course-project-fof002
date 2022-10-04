//FORM validation

const email = document.querySelector("#email");
const submitButton = document.querySelector(".submitButton");
const emailError = document.querySelector(".emailError");
const form = document.querySelector("#form");

form.addEventListener("submit", validateForm);

function validateForm (event) {

    event.preventDefault();

    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }
  }

function validateEmail(email) {

    const regEx = /\S+@\S+\.\S+/;

    const patternMatches = regEx.test(email);

    return patternMatches;

}