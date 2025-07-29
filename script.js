const form = document.getElementById("contact-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const consent = document.getElementById("consent");

const errorFirstName = document.getElementById("error-first-name");
const errorLastName = document.getElementById("error-last-name");
const errorEmail = document.getElementById("error-email");
const errorQueryType = document.getElementById("error-query-type");
const errorMessage = document.getElementById("error-message");
const errorConsent = document.getElementById("error-consent");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Hide all error messages
  errorFirstName.style.display = "none";
  errorLastName.style.display = "none";
  errorEmail.style.display = "none";
  errorQueryType.style.display = "none";
  errorMessage.style.display = "none";
  errorConsent.style.display = "none";
  successMessage.style.display = "none";

  let isValid = true;

  // First Name
  if (firstName.value.trim() === "") {
    errorFirstName.style.display = "block";
    isValid = false;
  }

  // Last Name
  if (lastName.value.trim() === "") {
    errorLastName.style.display = "block";
    isValid = false;
  }

  // Email
  const emailVal = email.value.trim();
  if (emailVal === "" || !emailVal.includes("@") || !emailVal.includes(".")) {
    errorEmail.style.display = "block";
    isValid = false;
  }

  // Query Type (radio)
  const queryType = document.querySelector('input[name="query-type"]:checked');
  if (!queryType) {
    errorQueryType.style.display = "block";
    isValid = false;
  }

  // Message
  if (message.value.trim() === "") {
    errorMessage.style.display = "block";
    isValid = false;
  }

  // Consent
  if (!consent.checked) {
    errorConsent.style.display = "block";
    isValid = false;
  }

  // Success
  if (isValid) {
    successMessage.style.display = "block";
    form.reset();
  }
});
  console.log("Form validation script loaded successfully.");