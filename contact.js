var message = document.getElementById("message");
var counter = document.getElementById("char-count");
var email = document.getElementById("email");
var emailNote = document.getElementById("email-note");
var form = document.getElementById("contact-form");
var successBox = document.getElementById("success-box");

message.onkeyup = function () {
  counter.innerHTML = message.value.length;
};

email.onkeyup = function () {
  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    emailNote.innerHTML = "Please enter a valid email address";
    emailNote.className = "note bad";
  } else {
    emailNote.innerHTML = "Email looks good";
    emailNote.className = "note good";
  }
};

form.onsubmit = function (event) {
  event.preventDefault();
  successBox.className = "success";
  form.reset();
  counter.innerHTML = 0;
  emailNote.innerHTML = "";
};
