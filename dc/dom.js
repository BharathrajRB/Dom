// Create form element
var form = document.createElement("form");
form.setAttribute("id", "myForm");
document.body.appendChild(form);

// Create input element for name
var nameLabel = document.createElement("label");
nameLabel.innerHTML = "Name: ";
form.appendChild(nameLabel);

var nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "name");
form.appendChild(nameInput);

// Create input element for email
var emailLabel = document.createElement("label");
emailLabel.innerHTML = "Email: ";
form.appendChild(emailLabel);

var emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("name", "email");
form.appendChild(emailInput);

var submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "Submit");
submitButton.className = "btn";
form.appendChild(submitButton);

form.addEventListener("submit", function (event) {
  var nameInput = nameInput.value;
  var emailInput = emailInput.value;

  if (nameInput === "" || emailInput === "") {
    alert("Please fill out all fields.");
    event.preventDefault();
  }

  if (nameInput.value.trim() === "") {
    alert("Name cannot be empty");
    event.preventDefault();
  }

  if (!isValidEmail(emailInput.value)) {
    alert("Invalid email address");
    event.preventDefault();
  }


  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});