(function () {
  let form = document.querySelector("#contact-form");
  let nameInput = document.querySelector("#name");
  let emailInput = document.querySelector("#email");
  let messageInput = document.querySelector("#message");

  function showErrorMessage(input, message) {
    let container = input.parentElement; // The .input-wrapper

    // Remove an existing error
    let error = container.querySelector(".error-message");
    if (error) {
      container.removeChild(error);
    }
    // Now add the error, if the message is not empty
    if (message) {
      let error = document.createElement("div");
      error.classList.add("error-message");
      error.innerText = message;
      container.appendChild(error);
    }
  }

  function validateName() {
    let value = nameInput.value;
    if (!value) {
      showErrorMessage(nameInput, "Name is required.");
      return false;
    }
    showErrorMessage(nameInput, null);
    return true;
  }

  function validateEmail() {
    let value = emailInput.value;
    if (!value || value.indexOf("@") === -1 || value.indexOf(".") === -1) {
      showErrorMessage(emailInput, "Please enter a valid email.");
      return false;
    }
    showErrorMessage(emailInput, null);
    return true;
  }

  function validateMessage() {
    let value = messageInput.value;
    if (!value || value.length < 20 || value.length > 30) {
      showErrorMessage(messageInput, "Message must be 20–30 characters long.");
      return false;
    }
    showErrorMessage(messageInput, null);
    return true;
  }

  //only be able to see one falsy value, either from the first input or the second.
  /* function validateForm() {
    return validateEmail() && validatePassword();
  } */

  //show all the errors at once when submitting the form
  function validateForm() {
    let validName = validateName();
    let validEmail = validateEmail();
    let validMessage = validateMessage();
    return validName && validEmail && validMessage;
  }

  // form submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validateForm()) {
      console.log("Name:", nameInput.value);
      console.log("Email:", emailInput.value);
      console.log("Message:", messageInput.value);

      alert("Form submitted successfully!");
    }
  });

  //Show or clear error messages instantly
  nameInput.addEventListener("input", validateName);
  emailInput.addEventListener("input", validateEmail);
  messageInput.addEventListener("input", validateMessage);
})();
