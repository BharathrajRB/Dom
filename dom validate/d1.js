
var form = document.createElement("form");
form.setAttribute("id", "myForm");
document.body.appendChild(form);

var nameLabel = document.createElement("label");
nameLabel.innerHTML = "Name: ";
form.appendChild(nameLabel);

var nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "name");
form.appendChild(nameInput);


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

// form validation
form.addEventListener("submit", function (event) {
  var nameValue = nameInput.value;
  var emailValue = emailInput.value;

  if (nameValue === "" || emailValue === "") {
    alert("Please fill out all fields.");
    event.preventDefault();
  }

  if (nameValue.value.trim() === "") {
    alert("Name cannot be empty");
    event.preventDefault();
  }

  if (!isValidEmail(emailValue.value)) {
    alert("Invalid email address");
    event.preventDefault();
  }


  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

});